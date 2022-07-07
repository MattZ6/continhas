import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';

import { DatePickerWeeksHeader, DayButton } from './components';
import { DatePickerContentStyles as Styles } from './styles';

export function DatePickerContent() {
  const { daysOfTheMonth } = useDatePicker();

  return (
    <Styles.Content>
      <DatePickerWeeksHeader />

      <Styles.DaysContainer>
        {daysOfTheMonth.map(day => (
          <DayButton key={day.key} day={day} />
        ))}
      </Styles.DaysContainer>
    </Styles.Content>
  );
}
