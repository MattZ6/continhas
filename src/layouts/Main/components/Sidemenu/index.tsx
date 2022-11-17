import { GearSix } from 'phosphor-react'

import { Header, Link, Navigation, ProfileLink } from './components'
import { SidemenuStyles as Styles } from './styles'

export function Sidemenu() {
  return (
    <Styles.Container>
      <Header />

      <Navigation />

      <Styles.Footer>
        <Styles.FooterNavigation>
          <Link icon={GearSix} name="Configurações" to="/settings" />
        </Styles.FooterNavigation>

        <Styles.ProfileContainer>
          <ProfileLink />
        </Styles.ProfileContainer>
      </Styles.Footer>
    </Styles.Container>
  )
}
