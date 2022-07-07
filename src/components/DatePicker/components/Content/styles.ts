import { styled } from '@styles/stitches.config';

export namespace DatePickerContentStyles {
  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });

  export const DaysContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
  });

  export const DaySlot = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  export const DayButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',

    width: '100%',
    minHeight: '32px',
    borderRadius: '$medium',
    border: 'none',

    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '500',
    color: '$defaultTextHiContrastColor',

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

    variants: {
      selected: {
        true: {
          backgroundColor: '$brandActiveElementBackground',
          color: '$brandSolidBackground',

          '&:not(:disabled):hover': {
            backgroundColor: '$brandElementHoverBackground',
          },

          '&:focus-visible': {
            outlineColor: '$brandElementBorder',
          },
        },
      },
    },
  });
}
