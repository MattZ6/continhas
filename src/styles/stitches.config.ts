import { mauve, pink, grass, red } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { globalCss, getCssText, keyframes, styled } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',

      defaultAppBackground: mauve.mauve1,
      defaultAppSubtleBackground: mauve.mauve2,
      defaultElementBackground: mauve.mauve3,
      defaultElementHoverBackground: mauve.mauve4,
      defaultActiveElementBackground: mauve.mauve5,
      defaultSubtleBorder: mauve.mauve6,
      defaultElementBorder: mauve.mauve7,
      defaultElementHoverBorder: mauve.mauve8,
      defaultSolidBackground: mauve.mauve9,
      defaultSolidHoverBackground: mauve.mauve10,
      defaultTextLoContrastColor: mauve.mauve11,
      defaultTextHiContrastColor: mauve.mauve12,

      brandAppBackground: pink.pink1,
      brandAppSubtleBackground: pink.pink2,
      brandElementBackground: pink.pink3,
      brandElementHoverBackground: pink.pink4,
      brandActiveElementBackground: pink.pink5,
      brandSubtleBorder: pink.pink6,
      brandElementBorder: pink.pink7,
      brandElementHoverBorder: pink.pink8,
      brandSolidBackground: pink.pink9,
      brandSolidHoverBackground: pink.pink10,
      brandTextLoContrastColor: pink.pink11,
      brandTextHiContrastColor: pink.pink12,

      successAppBackground: grass.grass1,
      successAppSubtleBackground: grass.grass2,
      successElementBackground: grass.grass3,
      successElementHoverBackground: grass.grass4,
      successActiveElementBackground: grass.grass5,
      successSubtleBorder: grass.grass6,
      successElementBorder: grass.grass7,
      successElementHoverBorder: grass.grass8,
      successSolidBackground: grass.grass9,
      successSolidHoverBackground: grass.grass10,
      successTextLoContrastColor: grass.grass11,
      successTextHiContrastColor: grass.grass12,

      errorAppBackground: red.red1,
      errorAppSubtleBackground: red.red2,
      errorElementBackground: red.red3,
      errorElementHoverBackground: red.red4,
      errorActiveElementBackground: red.red5,
      errorSubtleBorder: red.red6,
      errorElementBorder: red.red7,
      errorElementHoverBorder: red.red8,
      errorSolidBackground: red.red9,
      errorSolidHoverBackground: red.red10,
      errorTextLoContrastColor: red.red11,
      errorTextHiContrastColor: red.red12,
    },

    fonts: {
      default: '"Inter", sans-serif',
    },

    space: {
      small: '8px',
      normal: '16px',
      medium: '24px',
      large: '32px',
    },

    fontSizes: {
      small: '12px',
      normal: '14px',
      medium: '16px',
      large: '20px',
      larger: '24px',
      xlarger: '32px',
    },

    lineHeights: {
      small: '20px',
      normal: '24px',
      medium: '24px',
      large: '32px',
      larger: '36px',
      xlarger: '48px',
    },

    radii: {
      normal: '8px',
      medium: '12px',
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
    backgroundColor: '$defaultAppBackground',
    color: '$defaultTextHiContrastColor',
  },
});
