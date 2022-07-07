import { CurrencyDollarSimple, Receipt } from 'phosphor-react';
import { memo, useMemo } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { formatMoney } from '@utils/formatMoney';

import { TransactionStyles as Styles } from './styles';
// import { Tags } from './Tags';

type Props = {
  transaction: TransactionsProviderData.Transaction;
};

export const Transaction = memo(({ transaction }: Props) => {
  const value = useMemo(() => {
    return formatMoney(transaction.value);
  }, [transaction.value]);

  return (
    <Styles.Container>
      <Styles.CategoryButton
        type="button"
        disabled={transaction.type === 'INCOME'}
        transactionType={transaction.type}
      >
        {transaction.type === 'INCOME' ? (
          <CurrencyDollarSimple size={24} />
        ) : (
          <Receipt size={24} />
        )}
      </Styles.CategoryButton>

      <Styles.Content>
        <Styles.TitleContainer>
          <Styles.Title transactionType={transaction.type}>
            {transaction.title}
          </Styles.Title>
        </Styles.TitleContainer>

        {/* <Tags tags={transaction.tags} /> */}
      </Styles.Content>

      <Styles.Value transactionType={transaction.type}>{value}</Styles.Value>

      {/* <Styles.MenuButton>
        <DotsThreeVertical size={24} weight="bold" />
      </Styles.MenuButton> */}
    </Styles.Container>
  );
});
