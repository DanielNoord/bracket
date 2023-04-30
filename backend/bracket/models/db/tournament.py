from heliclockter import datetime_utc

from bracket.models.db.shared import BaseModelORM


class Tournament(BaseModelORM):
    id: int | None = None
    club_id: int
    name: str
    created: datetime_utc
    dashboard_public: bool
    logo_path: str | None
    players_can_be_in_multiple_teams: bool


class TournamentUpdateBody(BaseModelORM):
    name: str
    dashboard_public: bool
    players_can_be_in_multiple_teams: bool


class TournamentBody(TournamentUpdateBody):
    club_id: int


class TournamentToInsert(TournamentBody):
    created: datetime_utc