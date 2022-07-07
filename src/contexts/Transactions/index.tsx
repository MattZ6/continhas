import { createContext, useCallback, useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { useMonths } from '@hooks/useMonths';

import { CreateTransactionService } from '@services/simpleFinancesAPI/createTransaction';
import { GetBalanceService } from '@services/simpleFinancesAPI/getBalance';

import { TransactionsProviderData } from './types';

export const TransactionsContext = createContext(
  {} as TransactionsProviderData.Context
);

type UseGetBalanceInput = {
  date?: Date;
};

function useGetBalance({ date }: UseGetBalanceInput) {
  const correctDate = date!;

  return useQuery(
    [
      'balance',
      correctDate?.getUTCFullYear(),
      (correctDate?.getUTCMonth() ?? 0) + 1,
    ],
    async () => {
      const { income, outcome, total, transactions } =
        await GetBalanceService.execute({ date: correctDate });

      const balance: TransactionsProviderData.Balance = {
        income,
        outcome,
        total,
      };

      const dayTransactions: TransactionsProviderData.DayTransactions[] = [];

      transactions.forEach(t => {
        const transaction = {
          ...t,
          tags: [
            { id: '1', title: 'Kate', color_hex: '#ca71ff' },
            { id: '2', title: 'Adri', color_hex: '#ffd171' },
            { id: '3', title: 'CIS', color_hex: '#7671ff' },
            { id: '4', title: 'Minha clínica', color_hex: '#ff71fb' },
          ],
        };

        const transactionDate = new Date(transaction.date);

        const index = dayTransactions.findIndex(
          day =>
            day.date.getFullYear() === transactionDate.getFullYear() &&
            day.date.getMonth() === transactionDate.getMonth() &&
            day.date.getDate() === transactionDate.getDate()
        );

        if (index === -1) {
          const flatTransactionDate = new Date(
            transactionDate.getFullYear(),
            transactionDate.getMonth(),
            transactionDate.getDate()
          );

          const key = `${flatTransactionDate.getFullYear()}_${flatTransactionDate.getMonth()}_${flatTransactionDate.getDate()}`;

          dayTransactions.push({
            key,
            date: flatTransactionDate,
            transactions: [transaction],
          });
        } else {
          dayTransactions[index].transactions.push(transaction);
        }
      });

      return {
        balance,
        dayTransactions,
      };
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 12 * 60 * 60 * 1000, // 👈 12hrs
      enabled: !!date,
    }
  );
}

type Props = {
  children: React.ReactNode;
};

export function TransactionsProvider({ children }: Props) {
  const { selectedMonth, months, refetch: reloadMonths } = useMonths();
  const queryClient = useQueryClient();

  const { isLoading, isError, refetch, data } = useGetBalance({
    date: selectedMonth?.value,
  });

  const createTransaction = useCallback(
    async (request: CreateTransactionService.Request) => {
      await CreateTransactionService.execute(request);

      const { date } = request;

      queryClient.invalidateQueries([
        'balance',
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
      ]);

      const alreadyLoadedThisMonth = months.some(
        month =>
          month.value.getUTCFullYear() === date.getUTCFullYear() &&
          month.value.getUTCMonth() === date.getUTCMonth()
      );

      if (!alreadyLoadedThisMonth) {
        reloadMonths();
      }

      const mustReloadTransactions =
        selectedMonth?.value.getUTCFullYear() === date.getUTCFullYear() &&
        selectedMonth?.value.getUTCMonth() === date.getUTCMonth();

      console.log(
        mustReloadTransactions
          ? 'Recarregar transações'
          : 'Não recarregar transações'
      );

      if (mustReloadTransactions) {
        refetch();
      }
    },
    [months, selectedMonth, refetch, reloadMonths, queryClient]
  );

  const contextData = useMemo<TransactionsProviderData.Context>(
    () => ({
      isLoading,
      isError,
      refetch,
      balance: data?.balance ?? { income: 0, outcome: 0, total: 0 },
      dayTransactions: data?.dayTransactions ?? [],
      createTransaction,
    }),
    [isLoading, isError, refetch, data, createTransaction]
  );

  return (
    <TransactionsContext.Provider value={contextData}>
      {children}
    </TransactionsContext.Provider>
  );
}
