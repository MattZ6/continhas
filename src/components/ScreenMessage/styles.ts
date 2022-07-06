import { styled } from '@styles/stitches.config';

export namespace ScreenMessageStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',
    padding: '$medium',

    maxWidth: '520px',
    width: '100%',
    margin: '0 auto',
  });

  export const IconContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '80px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$defaultAppSubtleBackground',

    marginBottom: '$small',

    color: '$defaultTextLoContrastColor',
  });

  export const Title = styled('strong', {
    fontSize: '$medium',
    lineHeight: '$medium',
    fontWeight: '500',
    color: '$defaultTextLoContrastColor',
  });

  export const Message = styled('p', {
    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$defaultTextLoContrastColor',
  });

  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: '100px',
    height: '42px',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    marginTop: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: '$defaultElementBackground',
    color: '$defaultTextHiContrastColor',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '3px',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color, background-color, outline-color',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '&:focus-visible': {
      backgroundColor: '$defaultElementHoverBackground',
      outlineColor: '$defaultElementBorder',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '$defaultElementBackground',
      color: '$defaultTextLoContrastColor',
    },
  });
}
