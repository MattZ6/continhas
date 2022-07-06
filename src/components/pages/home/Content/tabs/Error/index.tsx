import { WarningCircle } from 'phosphor-react';

import { useMonths } from '@hooks/useMonths';

import { ScreenMessage } from '@components/ScreenMessage';

export function TabsError() {
  const { refetch } = useMonths();

  return (
    <ScreenMessage
      icon={WarningCircle}
      title="Falha ao carregar suas contas"
      message="Gostaria de tentar novamente?"
      button={{
        text: 'Tentar novamente',
        onPress: () => refetch(),
      }}
    />
  );
}
