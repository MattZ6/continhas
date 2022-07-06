export namespace TransactionsProviderData {
  export type Transaction = {
    id: string;
    title: string;
    type: 'INCOME' | 'OUTCOME';
    value: number;
    date: Date;
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
  };
}
