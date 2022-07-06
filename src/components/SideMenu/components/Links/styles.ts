import { styled } from '@styles/stitches.config';

export namespace SideMenuLinksStyles {
  export const Container = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$small',

    width: '100%',
  });

  export const Link = styled('a', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    width: '100%',
    height: '40px',
    paddingLeft: '$small',
    borderRadius: '8px',

    cursor: 'pointer',
    color: '$defaultTextHiContrastColor',

    paddingRight: '$small',
    backgroundColor: 'transparent',
    border: 'none',

    transitionProperty: 'background-color, color',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',

    '&:hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '@media screen and (max-width: 1280px)': {
      justifyContent: 'center',

      $$size: '56px',

      width: '$$size',
      height: '$$size',

      padding: 0,
    },

    variants: {
      active: {
        true: {
          color: '$brandSolidBackground',
          backgroundColor: '$brandElementBackground',

          '&:hover': {
            backgroundColor: '$brandElementHoverBackground',
          },
        },
      },
    },
  });

  export const LinkTitle = styled('span', {
    fontSize: '$normal',
    lineHeight: '24px',
    fontWeight: '500',

    '@media screen and (max-width: 1280px)': {
      display: 'none',
    },
  });
}
