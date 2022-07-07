import { useContext } from 'react';

import { DatePickerContext } from '../context';

export function useDatePicker() {
  return useContext(DatePickerContext);
}
