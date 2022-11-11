import { mauve, mauveDark } from '@radix-ui/colors'
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
      defaultSolidBackground: mauve.mauve9,
      defaultSolidBackgroundHover: mauve.mauve10,
      defaultTextLoContrast: mauve.mauve11,
      defaultTextHiContrast: mauve.mauve12,
    },

    fonts: {
      headlines: '"Inter", sans-serif',
      texts: '"Inter", sans-serif',
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
    defaultSolidBackground: mauveDark.mauve9,
    defaultSolidBackgroundHover: mauveDark.mauve10,
    defaultTextLoContrast: mauveDark.mauve11,
    defaultTextHiContrast: mauveDark.mauve12,
  },
})

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    fontFamily: '$texts',

    '-webkit-tap-highlight-color': 'transparent',
  },

  html: {
    backgroundColor: '$defaultBackground',
    color: '$defaultTextHiContrast',

    '::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
      borderRadius: '8px',
    },
  },
})

export { theme as lightTheme, darkTheme, globalStyles, styled }
