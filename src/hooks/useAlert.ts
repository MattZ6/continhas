import { useContext } from 'react';

import { AlertContext } from '@contexts/Alert';

export function useAlert() {
  return useContext(AlertContext);
}
