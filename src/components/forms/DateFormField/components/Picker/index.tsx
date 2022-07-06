import { DatePickerStyles as Styles } from './styles';

export function DatePicker() {
  return (
    <Styles.Container>
      <header>
        <button type="button">{'<'}</button>
        <strong>Julho de 2022</strong>
        <button type="button">{'>'}</button>
      </header>

      <div>
        <header>
          <div>D</div>
          <div>S</div>
          <div>T</div>
          <div>Q</div>
          <div>Q</div>
          <div>S</div>
          <div>S</div>
        </header>

        <div>
          <div>
            <button type="button">1</button>
          </div>
        </div>
      </div>
    </Styles.Container>
  );
}
