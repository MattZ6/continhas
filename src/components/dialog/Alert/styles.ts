import {
  Root as RadixRoot,
  Portal as RadixPortal,
  Overlay as RadixOverlay,
  Content as RadixContent,
  Title as RadixTitle,
  Description as RadixDescription,
  Close as RadixClose,
} from '@radix-ui/react-dialog';

import { keyframes, styled } from '@styles/stitches.config';

export namespace AlertDialogStyles {
  export const Dialog = RadixRoot;

  export const Portal = RadixPortal;

  const overlayFadeKeyrames = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  export const Overlay = styled(RadixOverlay, {
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

  export const Content = styled(RadixContent, {
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

  export const Title = styled(RadixTitle, {
    fontSize: '$larger',
    lineHeight: '$larger',
    fontWeight: '700',

    color: '$defaultTextHiContrastColor',
  });

  export const Description = styled(RadixDescription, {
    fontSize: '$medium',
    lineHeight: '$medium',

    color: '$defaultTextLoContrastColor',

    marginTop: '$small',
    marginBottom: '$medium',
  });

  export const CloseButton = styled(RadixClose, {
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

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

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
