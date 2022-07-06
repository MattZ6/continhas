import { styled } from '@styles/stitches.config';

export namespace GoogleSignInButtonStyles {
  export const Button = styled('button', {
    marginTop: '$normal',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    height: '44px',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$normal',
    border: 'none',

    backgroundColor: '$brandSolidBackground',
    fontSize: '$normal',
    fontWeight: '500',
    textDecoration: 'none',
    color: '$white',

    cursor: 'pointer',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, outline-color, color',

    '&:not(:disabled):hover': {
      backgroundColor: '$brandSolidHoverBackground',
    },

    '&:disabled': {
      backgroundColor: '$defaultElementBackground',
      color: '$defaultTextLoContrastColor',
      cursor: 'not-allowed',
    },

    '&:focus-visible': {
      outlineColor: '$brandElementBorder',
    },

    variants: {
      submiting: {
        true: {
          cursor: 'wait',

          '&:disabled': {
            cursor: 'wait',
          },
        },
      },
    },
  });
}
