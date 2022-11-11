import { ReactNode } from 'react'

import { ThemeProvider } from './Theme'

type Props = {
  children: ReactNode
}

export function Provider({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}
