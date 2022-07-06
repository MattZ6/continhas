export namespace MonthsProviderData {
  export type Month = {
    key: string;
    value: Date;
  };

  export type Context = {
    isLoading: boolean;
    isError: boolean;
    months: Month[];
    refetch: () => void;

    selectedMonth?: Month;
    selectMonth: (data: Month) => void;
    selectPrevious: () => void;
    selectNext: () => void;
  };
}
