import { ArrowFatLinesDown, ArrowFatLinesUp } from 'phosphor-react';

import { TransactionTypeSelectStyles as Styles } from './styles';

type TransactionType = 'INCOME' | 'OUTCOME';

type Props = {
  selected?: TransactionType;
  onChange: (type: TransactionType) => void;
};

export function TransactionTypeSelect({ selected, onChange }: Props) {
  return (
    <Styles.Container>
      <Styles.Button
        type="button"
        selected={selected === 'INCOME'}
        onClick={() => onChange('INCOME')}
      >
        <ArrowFatLinesDown size={16} />
        <Styles.ButtonLabel>Entrada</Styles.ButtonLabel>
      </Styles.Button>
      <Styles.Button
        type="button"
        selected={selected === 'OUTCOME'}
        onClick={() => onChange('OUTCOME')}
      >
        <ArrowFatLinesUp size={16} />
        <Styles.ButtonLabel>Saída</Styles.ButtonLabel>
      </Styles.Button>
    </Styles.Container>
  );
}
