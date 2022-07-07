import {
  Root as RadixRoot,
  Portal as RadixPortal,
  Overlay as RadixOverlay,
  Content as RadixContent,
  Close as RadixClose,
} from '@radix-ui/react-dialog';

import { keyframes, styled } from '@styles/stitches.config';

export namespace CreateTransactionDialogStyles {
  export const Root = RadixRoot;

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
    gap: '$normal',

    padding: '$medium',
    paddingTop: '$normal',
    backgroundColor: '$defaultAppBackground',

    borderRadius: '$normal',

    width: '90vw',
    maxWidth: '720px',
    height: 'fit-content',

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    animationName: dialogFadeKeyframes.toString(),
  });

  export const Form = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$medium',
  });

  export const Slot = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  });

  export const TagList = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '$small',

    marginTop: '$small',
  });

  export const Tag = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    paddingRight: '$normal',
    paddingLeft: '$small',

    fontSize: '$small',
    lineHeight: '$small',
    textAlign: 'center',
    fontWeight: '500',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '24px',

    backgroundColor: 'transparent',

    cursor: 'pointer',
  });

  export const TagDot = styled('div', {
    $$size: '5px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',
  });

  export const Footer = styled('footer', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$small',
  });

  export const CancelButton = styled(RadixClose, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: '100px',
    height: '44px',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$medium',
    border: 'none',

    backgroundColor: '$defaultElementBackground',
    color: '$defaultTextHiContrastColor',
    fontWeight: '500',

    cursor: 'pointer',
  });

  export const SubmitButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: '100px',
    height: '44px',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$medium',
    border: 'none',

    backgroundColor: '$brandSolidBackground',
    color: '$white',
    fontWeight: '500',

    cursor: 'pointer',

    '&[hidden]': {
      width: 0,
      height: 0,
      overflow: 'hidden',
    },
  });
}
