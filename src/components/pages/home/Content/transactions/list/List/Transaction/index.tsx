import {
  CurrencyDollarSimple,
  DotsThreeVertical,
  Receipt,
} from 'phosphor-react';
import { memo, useMemo } from 'react';

import { TransactionsProviderData } from '@contexts/Transactions/types';

import { formatMoney } from '@utils/formatMoney';

import { TransactionStyles as Styles } from './styles';

type Props = {
  transaction: TransactionsProviderData.Transaction;
};

export const Transaction = memo(({ transaction }: Props) => {
  const value = useMemo(() => {
    return formatMoney(transaction.value);
  }, [transaction.value]);

  const time = useMemo(() => {
    const date = new Date(transaction.date);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }, [transaction.date]);

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

        <Styles.Description>{time}</Styles.Description>
      </Styles.Content>

      <Styles.Value transactionType={transaction.type}>{value}</Styles.Value>

      <Styles.MenuButton>
        <DotsThreeVertical size={24} weight="bold" />
      </Styles.MenuButton>
    </Styles.Container>
  );
});
