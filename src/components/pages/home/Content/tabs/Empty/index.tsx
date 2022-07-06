import { Notepad } from 'phosphor-react';

import { ScreenMessage } from '@components/ScreenMessage';

export function TabsEmpty() {
  return (
    <ScreenMessage
      icon={Notepad}
      title="Nenhuma conta registrada até o momento"
      message='Você pode cadastrar uma nova conta clicando no botão "+" no canto superior direito'
    />
  );
}
