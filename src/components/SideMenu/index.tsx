import {
  SideMenuLinks,
  SideMenuLogoutButton,
  SideMenuProfileAvatar,
} from './components';
import { SideMenuStyles as Styles } from './styles';

export function SideMenu() {
  return (
    <Styles.Container>
      <SideMenuProfileAvatar />

      <SideMenuLinks />

      <SideMenuLogoutButton />
    </Styles.Container>
  );
}
