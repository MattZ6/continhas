import { Provider } from '@contexts/Provider'

import { Router } from '@routes/Router'

import { globalStyles } from '@styles/stitches.config'

globalStyles()

export function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}
