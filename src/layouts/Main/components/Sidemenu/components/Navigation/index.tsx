import { House } from 'phosphor-react'

import { Link } from '../Link'
import { NavigationStyles as Styles } from './styles'

export function Navigation() {
  return (
    <Styles.Container>
      <Link icon={House} name="Início" to="/" />
    </Styles.Container>
  )
}
