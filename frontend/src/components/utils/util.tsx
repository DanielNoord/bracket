import { useRouter } from 'next/router';

export function getItemColor(theme: any) {
  const darkTheme = theme.colorScheme === 'dark';
  return darkTheme ? theme.colors.dark[4] : theme.colors.gray[2];
}

function getTodayAtMidnight() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getDefaultTimeRange(selectMultipleDates: boolean) {
  const maxDate = getTodayAtMidnight();
  const minDate = getTodayAtMidnight();

  let offset = 1;
  if (minDate.getDay() === 0) {
    offset = 2;
  } else if (minDate.getDay() === 1) {
    offset = 3;
  }

  minDate.setDate(minDate.getDate() - offset);

  if (!selectMultipleDates) {
    maxDate.setDate(minDate.getDate());
  }

  return [minDate, maxDate];
}

export function onlyUnique(value: any, index: number, self: any) {
  return self.indexOf(value) === index;
}

export function getTournamentIdFromRouter() {
  const router = useRouter();
  const { id: idString }: any = router.query;
  const id = parseInt(idString, 10);
  const tournamentData = { id };
  return { id, tournamentData };
}