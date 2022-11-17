import { Outlet } from 'react-router-dom'

import { Sidemenu } from './components'
import { MainLayoutStyles as Styles } from './styles'

export function MainLayout() {
  return (
    <Styles.Container>
      <Sidemenu />

      <Styles.Main>
        <Outlet />
      </Styles.Main>
    </Styles.Container>
  )
}
