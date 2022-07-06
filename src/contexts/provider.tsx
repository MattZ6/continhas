import { MonthsProvider } from './Months';
import { TransactionsProvider } from './Transactions';

type Props = {
  children: React.ReactNode;
};

export function Provider({ children }: Props) {
  return (
    <MonthsProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </MonthsProvider>
  );
}
