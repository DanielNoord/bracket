import math
from collections import defaultdict
from decimal import Decimal

from pydantic import BaseModel

from bracket.database import database
from bracket.models.db.round import RoundWithMatches
from bracket.schema import players
from bracket.sql.players import get_all_players_in_tournament
from bracket.sql.rounds import get_rounds_with_matches
from bracket.utils.types import assert_some

START_ELO: int = 1200
K = 32
D = 400


class PlayerStatistics(BaseModel):
    wins: int = 0
    draws: int = 0
    losses: int = 0
    elo_score: int = START_ELO
    swiss_score: Decimal = Decimal('0.00')


def calculate_elo_per_player(rounds: list[RoundWithMatches]) -> defaultdict[int, PlayerStatistics]:
    player_x_elo: defaultdict[int, PlayerStatistics] = defaultdict(PlayerStatistics)

    for round_ in rounds:
        if not round_.is_draft:
            for match in round_.matches:
                if match.team1_score != 0 or match.team2_score != 0:
                    rating_team1_before = (
                        sum(
                            player_x_elo[player_id].elo_score
                            for player_id in match.team1.player_ids
                        )
                        / len(match.team1.player_ids)
                        if len(match.team1.player_ids) > 0
                        else START_ELO
                    )
                    rating_team2_before = (
                        sum(
                            player_x_elo[player_id].elo_score
                            for player_id in match.team2.player_ids
                        )
                        / len(match.team2.player_ids)
                        if len(match.team2.player_ids) > 0
                        else START_ELO
                    )

                    for team_index, team in enumerate(match.teams):
                        is_team1 = team_index == 0

                        for player in team.players:
                            team_score = match.team1_score if team_index == 0 else match.team2_score
                            was_draw = match.team1_score == match.team2_score
                            has_won = not was_draw and team_score == max(
                                match.team1_score, match.team2_score
                            )

                            if has_won:
                                player_x_elo[assert_some(player.id)].wins += 1
                                swiss_score_diff = Decimal('1.00')
                            elif was_draw:
                                player_x_elo[assert_some(player.id)].draws += 1
                                swiss_score_diff = Decimal('0.50')
                            else:
                                player_x_elo[assert_some(player.id)].losses += 1
                                swiss_score_diff = Decimal('0.00')

                            player_x_elo[assert_some(player.id)].swiss_score += swiss_score_diff
                            rating_diff = (rating_team2_before - rating_team1_before) * (
                                1 if is_team1 else -1
                            )
                            expected_score = Decimal(1.0 / (1.0 + math.pow(10.0, rating_diff / D)))
                            player_x_elo[assert_some(player.id)].elo_score += int(
                                K * (swiss_score_diff - expected_score)
                            )

    return player_x_elo


async def recalculate_elo_for_tournament_id(tournament_id: int) -> None:
    rounds_response = await get_rounds_with_matches(tournament_id)
    elo_per_player = calculate_elo_per_player(rounds_response)

    for player_id, statistics in elo_per_player.items():
        await database.execute(
            query=players.update().where(
                (players.c.id == player_id) & (players.c.tournament_id == tournament_id)
            ),
            values=statistics.dict(),
        )

    all_players = await get_all_players_in_tournament(tournament_id)
    for player in all_players:
        if player.id not in elo_per_player:
            await database.execute(
                query=players.update().where(
                    (players.c.id == player.id) & (players.c.tournament_id == tournament_id)
                ),
                values=PlayerStatistics().dict(),
            )