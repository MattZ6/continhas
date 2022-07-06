import { DateFormFieldStyles as Styles } from './styles';

export function DateFormField() {
  return (
    <Styles.Container>
      <Styles.Field>
        <button type="button">Selecione a data</button>

        <Styles.Picker>
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
        </Styles.Picker>
      </Styles.Field>
    </Styles.Container>
  );
}
