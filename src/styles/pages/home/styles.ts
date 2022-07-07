import { styled } from '@styles/stitches.config';

export namespace HomePageStyles {
  export const Wrapper = styled('div', {
    flex: 1,
    display: 'flex',

    width: '100%',
    overflowX: 'hidden',
  });

  export const Container = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    width: '0px',
    overflow: 'auto',
  });
}
