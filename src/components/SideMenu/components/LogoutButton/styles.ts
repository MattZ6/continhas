import { styled } from '@styles/stitches.config';

export namespace SideMenuLogoutButtonStyles {
  export const Button = styled('button', {
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
  });

  export const Title = styled('span', {
    fontSize: '$normal',
    lineHeight: '24px',
    fontWeight: '500',

    '@media screen and (max-width: 1280px)': {
      display: 'none',
    },
  });
}
