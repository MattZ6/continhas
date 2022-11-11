import { useContext } from 'react'

import { ThemeContext } from '@contexts/Theme'

export function useTheme() {
  return useContext(ThemeContext)
}
