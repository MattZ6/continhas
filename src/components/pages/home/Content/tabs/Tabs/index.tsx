import { useEffect } from 'react';

import { useMonths } from '@hooks/useMonths';

import { TabsStyles as Styles } from './styles';
import { Tab } from './Tab';

export function Tabs() {
  const { months, selectedMonth } = useMonths();

  useEffect(() => {
    if (selectedMonth) {
      const element = document.getElementById(selectedMonth.key);

      if (element) {
        setTimeout(() => {
          element.focus({ preventScroll: true });
          element.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest',
          });
        }, 0);
      }
    }
  }, [selectedMonth]);

  return (
    <Styles.Container>
      {months.map(month => (
        <Tab key={month.key} month={month} />
      ))}
    </Styles.Container>
  );
}
