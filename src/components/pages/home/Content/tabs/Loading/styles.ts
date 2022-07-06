import { styled } from '@styles/stitches.config';

export namespace TabsLoadingStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    overflow: 'hidden',

    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });
}
