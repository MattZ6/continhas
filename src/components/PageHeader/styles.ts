import { styled } from '@styles/stitches.config';

export namespace PageHeaderStyles {
  export const Container = styled('header', {
    display: 'flex',
    gap: '$normal',

    padding: '$medium',
  });

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  });

  export const Title = styled('h1', {
    fontSize: '$xlarger',
    lineHeight: '$xlarger',
    fontWeight: '700',
    color: '$defaultTextHiContrastColor',
  });

  export const Subtitle = styled('p', {
    fontSize: '$medium',
    lineHeight: '$medium',
    fontWeight: '400',
    color: '$defaultTextLoContrastColor',
  });

  export const Controls = styled('div', {
    flexShrink: 0,
    display: 'flex',
    gap: '$normal',
  });
}
