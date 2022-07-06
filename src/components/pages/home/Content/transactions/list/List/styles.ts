import { styled } from '@styles/stitches.config';

export namespace ListStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });

  export const DayTransactionsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    paddingBottom: '$small',
  });

  export const Transactions = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });
}
