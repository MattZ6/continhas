import { createContext, useCallback, useEffect, useRef, useState } from 'react'

import { LocalStorageUtils } from '@utils/localStorage'

import { darkTheme, lightTheme } from '@styles/stitches.config'

import { ThemeContextTypes, ThemeProviderTypes } from './types'

const KEY = 'color_mode'

function getColorModeFromLocalStorage() {
  return LocalStorageUtils.retrieve<ThemeContextTypes.Theme>(KEY)
}

function getColorModeFromDevice() {
  const mediaQueryList = matchMedia('(prefers-color-scheme: dark)')

  const hasMediaQueryPreference = typeof mediaQueryList.matches === 'boolean'

  if (!hasMediaQueryPreference) {
    return null
  }

  return mediaQueryList.matches ? 'dark' : 'light'
}

const ThemeContext = createContext({} as ThemeContextTypes.Context)

const THEMES_CLASSES = {
  light: lightTheme.className,
  dark: darkTheme.className,
}

function ThemeProvider({ children }: ThemeProviderTypes.Props) {
  const html = useRef(document.documentElement)
  const [theme, setTheme] = useState<ThemeContextTypes.Theme>(() => {
    const colorModeFromLocalStorage = getColorModeFromLocalStorage()

    if (colorModeFromLocalStorage) {
      return colorModeFromLocalStorage
    }

    return 'system'
  })

  const selectTheme = useCallback((input: ThemeContextTypes.Theme) => {
    setTheme(input)
  }, [])

  function applyColorMode(colorMode: 'light' | 'dark') {
    const classToRemove =
      colorMode === 'dark' ? THEMES_CLASSES.light : THEMES_CLASSES.dark

    html.current.classList.add(THEMES_CLASSES[colorMode])
    html.current.classList.remove(classToRemove)
  }

  useEffect(() => LocalStorageUtils.store(KEY, theme), [theme])

  useEffect(() => {
    if (theme !== 'system') {
      return
    }

    const darkModeMediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )
    const lightModeMediaQueryList = window.matchMedia(
      '(prefers-color-scheme: light)',
    )

    const colorMode = getColorModeFromDevice() ?? 'light'

    applyColorMode(colorMode)

    darkModeMediaQueryList.addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'dark' : 'light')
    })

    lightModeMediaQueryList.addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'light' : 'dark')
    })

    return () => {
      darkModeMediaQueryList.removeEventListener('change', () => {})
      lightModeMediaQueryList.removeEventListener('change', () => {})
    }
  }, [theme])

  useEffect(() => {
    if (theme === 'system') {
      return
    }

    applyColorMode(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
