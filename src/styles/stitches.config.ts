import { mauve, mauveDark, pink, pinkDark } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const { globalCss, theme, createTheme, styled } = createStitches({
  theme: {
    colors: {
      defaultBackground: mauve.mauve1,
      defaultSubtleBackground: mauve.mauve2,
      defaultElementBackground: mauve.mauve3,
      defaultElementBackgroundHover: mauve.mauve4,
      defaultElementBackgroundActive: mauve.mauve5,
      defaultSubtleBorder: mauve.mauve6,
      defaultElementBorder: mauve.mauve7,
      defaultElementBorderHover: mauve.mauve8,
      defaultSolid: mauve.mauve9,
      defaultSolidHover: mauve.mauve10,
      defaultTextLoContrast: mauve.mauve11,
      defaultTextHiContrast: mauve.mauve12,

      brandElementBackground: pink.pink3,
      brandElementBackgroundHover: pink.pink4,
      brandElementBackgroundActive: pink.pink5,
      brandSubtleBorder: pink.pink6,
      brandElementBorder: pink.pink7,
      brandElementBorderHover: pink.pink8,
      brandSolid: pink.pink9,
      brandSolidHover: pink.pink10,
    },

    fonts: {
      headlines: '"Inter", sans-serif',
      texts: '"Inter", sans-serif',
    },

    fontSizes: {
      small: '12px',
      normal: '14px',
      default: '16px',
    },

    lineHeights: {
      small: '20px',
      normal: '20px',
      default: '24px',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 600,
    },

    space: {
      smaller: '4px',
      small: '8px',
      normal: '12px',
      default: '16px',
      medium: '24px',
    },

    radii: {
      small: '8px',
    },
  },
})

const darkTheme = createTheme({
  colors: {
    defaultBackground: mauveDark.mauve1,
    defaultSubtleBackground: mauveDark.mauve2,
    defaultElementBackground: mauveDark.mauve3,
    defaultElementBackgroundHover: mauveDark.mauve4,
    defaultElementBackgroundActive: mauveDark.mauve5,
    defaultSubtleBorder: mauveDark.mauve6,
    defaultElementBorder: mauveDark.mauve7,
    defaultElementBorderHover: mauveDark.mauve8,
    defaultSolid: mauveDark.mauve9,
    defaultSolidHover: mauveDark.mauve10,
    defaultTextLoContrast: mauveDark.mauve11,
    defaultTextHiContrast: mauveDark.mauve12,

    brandElementBackground: pinkDark.pink3,
    brandElementBackgroundHover: pinkDark.pink4,
    brandElementBackgroundActive: pinkDark.pink5,
    brandSubtleBorder: pinkDark.pink6,
    brandElementBorder: pinkDark.pink7,
    brandElementBorderHover: pinkDark.pink8,
    brandSolid: pinkDark.pink9,
    brandSolidHover: pinkDark.pink10,
  },
})

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '-webkit-font-smoothing': 'antialiased',

    fontFamily: '$texts',

    '-webkit-tap-highlight-color': 'transparent',
  },

  html: {
    backgroundColor: '$defaultBackground',
    color: '$defaultTextHiContrast',

    '::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
      borderRadius: '$small',
    },
  },
})

export { theme as lightTheme, darkTheme, globalStyles, styled }
