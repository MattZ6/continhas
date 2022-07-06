import { useBalance } from '@hooks/useBalance';

import { Day } from './Day';
import { ListStyles as Styles } from './styles';
import { Transaction } from './Transaction';

export function List() {
  const { dayTransactions } = useBalance();

  return (
    <Styles.Container>
      {dayTransactions.map(day => (
        <Styles.DayTransactionsContainer key={day.key}>
          <Day date={day.date} />

          <Styles.Transactions>
            {day.transactions.map(transaction => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </Styles.Transactions>
        </Styles.DayTransactionsContainer>
      ))}
    </Styles.Container>
  );
}
