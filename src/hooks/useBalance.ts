import { useContext } from 'react';

import { TransactionsContext } from '@contexts/Transactions';

export function useBalance() {
  return useContext(TransactionsContext);
}
