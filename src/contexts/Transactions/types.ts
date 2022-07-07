import { CreateTransactionService } from '@services/simpleFinancesAPI/createTransaction';

export namespace TransactionsProviderData {
  export type Tag = {
    id: string;
    title: string;
    color_hex: string;
  };

  export type Transaction = {
    id: string;
    title: string;
    type: 'INCOME' | 'OUTCOME';
    value: number;
    date: Date;
    tags: Tag[];
  };

  export type Balance = {
    income: number;
    outcome: number;
    total: number;
  };

  export type DayTransactions = {
    key: string;
    date: Date;
    transactions: Transaction[];
  };

  export type Context = {
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
    balance: Balance;
    dayTransactions: DayTransactions[];
    createTransaction: (
      request: CreateTransactionService.Request
    ) => Promise<void>;
  };
}
