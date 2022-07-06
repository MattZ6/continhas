import { SignOut } from 'phosphor-react';
import { useState } from 'react';

import { useAuth } from '@hooks/useAuth';

import { ConfirmDialog } from '@components/ConfirmDialog';

import { SideMenuLogoutButtonStyles as Styles } from './styles';

export function SideMenuLogoutButton() {
  const { signOut } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Styles.Button type="button" onClick={() => setIsDialogOpen(true)}>
        <SignOut size={24} />
        <Styles.Title>Sair</Styles.Title>
      </Styles.Button>

      <ConfirmDialog
        data={{
          title: 'Sair da sua conta?',
          description: 'Você realmente deseja se desconectar da sua conta?',
          confirmButtonText: 'Sair',
          primaryAction: 'CANCEL',
        }}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={signOut}
      />
    </>
  );
}
