import { styled } from '@styles/stitches.config';

export namespace HomePageHeaderStyles {
  export const CreateTransactionButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '48px',

    width: '$$size',
    height: '$$size',
    borderRadius: '6px',

    backgroundColor: '$defaultElementBackground',
    border: 'none',

    cursor: 'pointer',

    color: '$textHiContrast',

    '&:hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    variants: {
      hidden: {
        true: {
          transform: 'scale(0)',
        },
      },
    },
  });
}
