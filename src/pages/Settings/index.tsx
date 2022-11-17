import { ChangeEvent } from 'react'

import { useTheme } from '@hooks/useTheme'

import { SettingsPageStyles as Styles } from './styles'

export function SettingsPage() {
  const { theme, selectTheme } = useTheme()

  function handleSelectTheme(event: ChangeEvent<HTMLInputElement>) {
    selectTheme(event.target.value as typeof theme)
  }

  return (
    <Styles.Container>
      <Styles.Title>Configurações</Styles.Title>

      <Styles.Content>
        <Styles.Block>
          <Styles.Subtitle>Tema da interface</Styles.Subtitle>
          <Styles.Message>Personalize o tema da aplicação</Styles.Message>

          <label>
            <input
              checked={theme === 'system'}
              name="theme"
              type="radio"
              value="system"
              onChange={handleSelectTheme}
            />
            <span>Padrão do sistema</span>
          </label>

          <label>
            <input
              checked={theme === 'light'}
              name="theme"
              type="radio"
              value="light"
              onChange={handleSelectTheme}
            />
            <span>Claro</span>
          </label>

          <label>
            <input
              checked={theme === 'dark'}
              name="theme"
              type="radio"
              value="dark"
              onChange={handleSelectTheme}
            />
            <span>Escuro</span>
          </label>
        </Styles.Block>
      </Styles.Content>
    </Styles.Container>
  )
}
