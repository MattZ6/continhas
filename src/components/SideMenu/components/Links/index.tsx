import { House } from 'phosphor-react';

import { SideMenuLinksStyles as Styles } from './styles';

export function SideMenuLinks() {
  return (
    <Styles.Container>
      <Styles.Link active>
        <House size={24} />
        <Styles.LinkTitle>Início</Styles.LinkTitle>
      </Styles.Link>
    </Styles.Container>
  );
}
