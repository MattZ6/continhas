import { mauve, purple } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { globalCss, getCssText, styled } = createStitches({
  theme: {
    colors: {
      appBackground: mauve.mauve1,
      appSubtleBackground: mauve.mauve2,

      elementBackground: mauve.mauve3,
      elementHoverBackground: mauve.mauve4,

      selectedElementBackground: mauve.mauve5,

      elementBorder: mauve.mauve7,
      elementHoverBorder: mauve.mauve8,

      textLoContrast: mauve.mauve11,
      textHiContrast: mauve.mauve12,

      brandColor: purple.purple9,
    },
    fonts: {
      default: '"Inter", sans-serif',
    },
    space: {
      small: '8px',
      normal: '16px',
      medium: '24px',
    },
    fontSizes: {
      small: '12px',
      normal: '14px',
      medium: '16px',
      large: '20px',
      larger: '24px',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    fontFamily: '$default',
  },

  html: {
    backgroundColor: '$appBackground',
    color: '$textHiContrast',
  },
});
