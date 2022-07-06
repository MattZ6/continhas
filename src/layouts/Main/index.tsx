import { SideMenu } from '@components/SideMenu';

import { MainLayoutStyles as Styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <Styles.Container>
      <SideMenu />

      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
}
