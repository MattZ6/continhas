import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './Theme'
type Props = {
  children: ReactNode
}

export function Provider({ children }: Props) {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}
