import { styled } from '@styles/stitches.config';

export namespace TransactionTypeSelectStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',

    backgroundColor: '$defaultElementBackground',
    padding: '4px',
    borderRadius: '40px',
  });

  export const Button = styled('button', {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    paddingLeft: '$small',
    paddingRight: '$small',

    $$size: '40px',

    height: '$$size',

    border: 'none',
    borderRadius: '$$size',
    backgroundColor: 'transparent',
    color: '$defaultTextHiContrastColor',

    cursor: 'pointer',

    transition: 'background-color 150ms ease-out, color 150ms ease-out',

    '&:hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandAppBackground',
          color: '$brandSolidBackground',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',

          '&:hover': {
            backgroundColor: '$brandAppBackground',
          },
        },
      },
    },
  });

  export const ButtonLabel = styled('span', {
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '700',
  });
}
