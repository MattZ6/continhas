import { styled } from '@styles/stitches.config';

export namespace DatePickerHeaderStyles {
  export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  export const HeaderTitle = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    color: '$defaultTextHiContrastColor',
  });

  export const HeaderButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '36px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: 'transparent',
    border: 'none',

    color: '$defaultTextLoContrastColor',

    cursor: 'pointer',

    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'background-color, color, outline-color',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  });
}
