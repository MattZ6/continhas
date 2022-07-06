import { useMonths } from '@hooks/useMonths';

import { HomePageContent as Styles } from './styles';
import { Tabs, TabsEmpty, TabsError, TabsLoading } from './tabs';
import { Transactions } from './transactions';

export function HomePageContent() {
  const { isLoading, isError: error, months } = useMonths();

  if (isLoading) {
    return <TabsLoading />;
  }

  if (error) {
    return <TabsError />;
  }

  if (!months.length) {
    return <TabsEmpty />;
  }

  return (
    <Styles.Container>
      <Tabs />
      <Transactions />
    </Styles.Container>
  );
}
