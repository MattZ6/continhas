import {
  ArrowFatLinesUp,
  ArrowFatLinesDown,
  Confetti,
  ThumbsDown,
  IconProps,
} from 'phosphor-react';
import { memo, useMemo } from 'react';

import { useBalance } from '@hooks/useBalance';

import { formatMoney } from '@utils/formatMoney';

import { BalanceStyles as Styles } from './styles';

type IconType = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

type Props = {
  icon: IconType;
  label: JSX.Element | string;
  value: number;
};

const Card = memo(({ icon: Icon, label, value }: Props) => {
  const formattedValue = useMemo(() => {
    return formatMoney(value || 0);
  }, [value]);

  return (
    <Styles.Card>
      <Styles.IconContainer>
        <Icon size={24} />
      </Styles.IconContainer>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Value>{formattedValue}</Styles.Value>
    </Styles.Card>
  );
});

export function Balance() {
  const { balance } = useBalance();

  return (
    <Styles.Container>
      <Card
        icon={ArrowFatLinesDown}
        label={
          <>
            <b>Entradas</b> deste mês
          </>
        }
        value={balance.income}
      />
      <Card
        icon={ArrowFatLinesUp}
        label={
          <>
            <b>Saídas</b> deste mês
          </>
        }
        value={balance.outcome}
      />
      <Card
        icon={balance.total >= 0 ? Confetti : ThumbsDown}
        label={
          <>
            <b>{balance.total >= 0 ? 'Lucro' : 'Prejuízo'}</b> de
          </>
        }
        value={balance.total}
      />
    </Styles.Container>
  );
}
