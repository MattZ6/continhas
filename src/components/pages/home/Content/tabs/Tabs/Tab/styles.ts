import { styled } from '@styles/stitches.config';

export namespace TabStyles {
  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    scrollSnapAlign: 'start',

    $$size: '32px',

    height: '$$size',
    paddingLeft: '$normal',
    paddingRight: '$normal',
    borderRadius: '$$size',

    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$defaultElementBorder',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '2px',

    fontSize: '$normal',
    fontWeight: '500',
    color: '$defaultTextHiContrastColor',

    whiteSpace: 'nowrap',

    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
      borderColor: '$defaultElementHoverBorder',
    },

    '&:focus-visible': {
      outlineColor: '$brandElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandElementBackground',
          borderColor: '$brandElementBorder',
          color: '$brandSolidBackground',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandElementHoverBackground',
            borderColor: '$brandElementHoverBorderColor',
            color: '$brandSolidHoverBackground',
          },
        },
      },
    },
  });
}
