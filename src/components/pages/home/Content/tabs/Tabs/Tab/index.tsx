import { KeyboardEvent, memo, useCallback, useMemo } from 'react';

import { MonthsProviderData } from '@contexts/Months/types';

import { useMonths } from '@hooks/useMonths';

import { formatMonth } from '@utils/formatMonth';

import { TabStyles as Styles } from './styles';

type Events = {
  [key: string]: () => void;
};

type Props = {
  month: MonthsProviderData.Month;
};

export const Tab = memo(({ month }: Props) => {
  const { selectedMonth, selectMonth, selectPrevious, selectNext } =
    useMonths();

  const events = useMemo<Events>(
    () => ({
      ArrowLeft: () => selectPrevious(),
      ArrowRight: () => selectNext(),
    }),
    [selectPrevious, selectNext]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const callback = events[event.code];

      if (callback) {
        event.stopPropagation();
        event.preventDefault();

        callback();
      }
    },
    [events]
  );

  const label = useMemo(() => formatMonth(month.value), [month.value]);

  return (
    <Styles.Button
      id={month.key}
      selected={selectedMonth?.key === month.key}
      onClick={() => selectMonth(month)}
      tabIndex={selectedMonth?.key === month.key ? 0 : -1}
      onKeyDown={handleKeyPress}
    >
      {label}
    </Styles.Button>
  );
});
