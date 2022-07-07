import { styled } from '@styles/stitches.config';

export namespace TransactionTypeSwitchStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    padding: '4px',
    borderRadius: '32px',

    backgroundColor: '$brandElementBackground',

    marginBottom: '$normal',
  });

  export const Button = styled('button', {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '32px',
    borderRadius: '32px',
    border: 'none',

    backgroundColor: 'transparent',
    color: '$brandTextHiContrastColor',

    cursor: 'pointer',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    '&:not(:disabled):hover': {
      backgroundColor: '$brandElementHoverBackground',
    },

    '&:focus-visible': {
      outlineColor: '$brandElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandSolidBackground',
          color: '$white',
          fontWeight: '500',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandSolidHoverBackground',
          },
        },
      },
    },
  });
}
