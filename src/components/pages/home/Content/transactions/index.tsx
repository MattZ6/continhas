import { useBalance } from '@hooks/useBalance';

import { Balance, BalanceLoading } from './balance';
import { TransactionsEmpty } from './Empty';
import { TransactionsError } from './Error';
import { ListLoading } from './list';
import { List } from './list/List';
import { TransactionsStyles as Styles } from './styles';

export function Transactions() {
  const { isLoading, isError, dayTransactions } = useBalance();

  if (isError) {
    return <TransactionsError />;
  }

  if (isLoading) {
    return (
      <Styles.Container>
        <BalanceLoading />
        <ListLoading />
      </Styles.Container>
    );
  }

  if (!dayTransactions.length) {
    return <TransactionsEmpty />;
  }

  return (
    <Styles.Container>
      <Balance />
      <List />
    </Styles.Container>
  );
}
