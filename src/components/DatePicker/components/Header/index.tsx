import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { useMemo } from 'react';

import { formatFullMonth } from '@utils/formatMonth';

import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';

import { DatePickerHeaderStyles as Styles } from './styles';

export function DatePickerHeader() {
  const { selectNextMonth, selectPreviousMonth, selectedMonthDate } =
    useDatePicker();

  const label = useMemo(() => {
    return formatFullMonth(selectedMonthDate);
  }, [selectedMonthDate]);

  return (
    <Styles.Header>
      <Styles.HeaderButton onClick={selectPreviousMonth}>
        <ArrowLeft size={20} />
      </Styles.HeaderButton>

      <Styles.HeaderTitle>{label}</Styles.HeaderTitle>

      <Styles.HeaderButton onClick={selectNextMonth}>
        <ArrowRight size={20} />
      </Styles.HeaderButton>
    </Styles.Header>
  );
}
