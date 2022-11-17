import { useTheme } from '@hooks/useTheme'

export function SettingsPage() {
  const { selectTheme } = useTheme()

  return (
    <div>
      <h1>Settings</h1>

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
