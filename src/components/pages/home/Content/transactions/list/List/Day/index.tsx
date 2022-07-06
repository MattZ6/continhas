import { memo, useMemo } from 'react';

import { formatRelativeDate } from '@utils/formatRelativeDate';

import { DayStyles as Styles } from './styles';

type Props = {
  date: Date;
};

export const Day = memo(({ date }: Props) => {
  const label = useMemo(() => formatRelativeDate(date), [date]);

  return <Styles.Header dateTime={date.toISOString()}>{label}</Styles.Header>;
});
