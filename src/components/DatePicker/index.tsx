import { DatePickerContent } from './components/Content';
import { DatePickerHeader } from './components/Header';
import { DatePickerProvider } from './context';
import { DatePickerStyles as Styles } from './styles';

type Props = {
  onChange: (date: Date) => void;
};

export function DatePicker({ onChange }: Props) {
  return (
    <DatePickerProvider onChange={onChange}>
      <Styles.Container>
        <DatePickerHeader />
        <DatePickerContent />
      </Styles.Container>
    </DatePickerProvider>
  );
}
