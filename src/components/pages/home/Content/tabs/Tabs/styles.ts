import { styled } from '@styles/stitches.config';

export namespace TabsStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    overflowX: 'auto',
    overflowY: 'hidden',

    scrollSnapType: 'x mandatory',
    scrollPaddingLeft: '$medium',

    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });

  export const Tab = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    scrollSnapAlign: 'start',

    $$size: '32px',

    height: '$$size',
    paddingLeft: '$normal',
    paddingRight: '$normal',
    borderRadius: '$$size',

    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$defaultElementBorder',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '2px',

    fontSize: '$normal',
    fontWeight: '500',
    color: '$defaultTextHiContrastColor',

    whiteSpace: 'nowrap',

    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementHoverBackground',
      borderColor: '$defaultElementHoverBorder',
    },

    '&:focus-visible': {
      outlineColor: '$brandElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandElementBackground',
          borderColor: '$brandElementBorder',
          color: '$brandSolidBackground',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandElementHoverBackground',
            borderColor: '$brandElementHoverBorderColor',
            color: '$brandSolidHoverBackground',
          },
        },
      },
    },
  });
}
