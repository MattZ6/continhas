import { TransactionTypeSwitchStyles as Styles } from './styles';

type Type = 'INCOME' | 'OUTCOME';

type Props = {
  selected: Type;
  onChange: (type: Type) => void;
};

export function TransactionTypeSwitch({ selected, onChange }: Props) {
  return (
    <Styles.Container>
      <Styles.Button
        selected={selected === 'INCOME'}
        onClick={() => onChange('INCOME')}
      >
        Recebimento
      </Styles.Button>
      <Styles.Button
        selected={selected === 'OUTCOME'}
        onClick={() => onChange('OUTCOME')}
      >
        Gasto
      </Styles.Button>
    </Styles.Container>
  );
}
