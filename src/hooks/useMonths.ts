import { useContext } from 'react';

import { MonthsContext } from '@contexts/Months';

export function useMonths() {
  return useContext(MonthsContext);
}
