import { styled } from '@styles/stitches.config';

export namespace MainLayoutStyles {
  export const Container = styled('section', {
    display: 'flex',

    minHeight: '100vh',

    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '$defaultSubtleBorder',

    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '$defaultSubtleBorder',

    width: '100%',
    // maxWidth: '1920px',
    maxWidth: '1280px',
    margin: '0 auto',

    height: '100vh',
  });

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  });
}
