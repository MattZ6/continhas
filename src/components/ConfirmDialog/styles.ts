import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';

import { styled, keyframes } from '@styles/stitches.config';

export namespace ConfirmDialogStyles {
  const overlayFadeKeyrames = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  export const Overlay = styled(RadixAlertDialog.Overlay, {
    width: '100vw',
    height: '100vh',

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.45)',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    animationName: overlayFadeKeyrames.toString(),
  });

  const dialogFadeKeyframes = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  export const Content = styled(RadixAlertDialog.Content, {
    display: 'flex',
    flexDirection: 'column',

    padding: '$medium',
    paddingTop: '$normal',
    backgroundColor: '$defaultAppBackground',

    borderRadius: '$normal',

    width: '90vw',
    maxWidth: '480px',
    height: 'fit-content',

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    animationName: dialogFadeKeyframes.toString(),
  });

  export const Title = styled(RadixAlertDialog.Title, {
    fontSize: '$larger',
    lineHeight: '$larger',
    fontWeight: '700',

    color: '$defaultTextHiContrastColor',
  });

  export const Description = styled(RadixAlertDialog.Description, {
    fontSize: '$medium',
    lineHeight: '$medium',

    color: '$defaultTextLoContrastColor',

    marginTop: '$small',
    marginBottom: '$medium',
  });

  export const Actions = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$small',
  });

  export const Cancel = styled(RadixAlertDialog.Cancel, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: '100px',
    height: '42px',

    paddingHorizontal: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: '$defaultElementBackground',
    color: '$defaultTextHiContrastColor',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color, background-color, outline-color',

    '&:hover': {
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

    variants: {
      primary: {
        true: {
          backgroundColor: '$brandSolidBackground',
          color: '$white',

          '&:hover, &:focus-visible': {
            backgroundColor: '$brandSolidHoverBackground',
          },

          '&:focus-visible': {
            outlineColor: '$brandElementHoverBorder',
          },
        },
      },
    },
  });

  export const Action = styled(RadixAlertDialog.Action, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    minWidth: '100px',
    height: '42px',

    paddingHorizontal: '$normal',

    border: 'none',
    borderRadius: '$normal',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    letterSpacing: '0.5px',

    cursor: 'pointer',

    backgroundColor: '$defaultElementBackground',
    color: '$defaultTextHiContrastColor',

    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'color, background-color, outline-color',

    '&:hover': {
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
