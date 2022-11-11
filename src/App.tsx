import { Provider } from '@contexts/Provider'

import { useTheme } from '@hooks/useTheme'

import { globalStyles } from '@styles/stitches.config'

globalStyles()

function ThemeSwitcher() {
  const { selectTheme } = useTheme()

  return (
    <div>
      <button type="button" onClick={() => selectTheme('light')}>
        Light
      </button>
      <button type="button" onClick={() => selectTheme('dark')}>
        Dark
      </button>
      <button type="button" onClick={() => selectTheme('system')}>
        System
      </button>
    </div>
  )
}

export function App() {
  return (
    <Provider>
      <h1>App</h1>

      <ThemeSwitcher />
    </Provider>
  )
}
