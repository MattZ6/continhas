import { useState } from 'react';

import { Provider } from '@contexts/provider';

import { MainLayout } from '@layouts/Main';

import { HomePageContent, HomePageHeader } from '@components/pages/home';
import { TransactionForm } from '@components/TransactionForm';

import { HomePageStyles as Styles } from './styles';

export default function HomePage() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);

  return (
    <Provider>
      <Styles.Wrapper>
        <Styles.Container>
          <HomePageHeader
            isButtonHidden={isTransactionFormOpen}
            onButtonPressed={() => setIsTransactionFormOpen(true)}
          />

          <HomePageContent />
        </Styles.Container>

        {isTransactionFormOpen && (
          <TransactionForm
            onCloseRequest={() => setIsTransactionFormOpen(false)}
          />
        )}
      </Styles.Wrapper>
    </Provider>
  );
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
