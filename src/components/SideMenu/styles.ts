import { styled } from '@styles/stitches.config';

export namespace SideMenuStyles {
  export const Container = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$normal',

    width: '200px',
    padding: '$normal',

    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '$defaultSubtleBorder',

    '@media screen and (max-width: 1280px)': {
      width: '100px',
    },
  });
}
