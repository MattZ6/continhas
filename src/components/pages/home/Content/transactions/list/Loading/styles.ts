import { styled } from '@styles/stitches.config';

export namespace ListLoadingStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  });

  export const MonthContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    paddingBottom: '$small',
  });

  export const Header = styled('div', {
    paddingTop: '$small',
    paddingBottom: '$small',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });

  export const Item = styled('div', {
    display: 'flex',
    gap: '$normal',

    paddingTop: '$normal',
    paddingBottom: '$normal',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });

  export const ItemContent = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$small',
  });
}
