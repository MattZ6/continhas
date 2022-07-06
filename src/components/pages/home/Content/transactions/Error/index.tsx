import { WarningCircle } from 'phosphor-react';

import { useBalance } from '@hooks/useBalance';

import { ScreenMessage } from '@components/ScreenMessage';

export function TransactionsError() {
  const { refetch } = useBalance();

  return (
    <ScreenMessage
      icon={WarningCircle}
      title="Falha ao carregar as contas deste mês"
      message="Gostaria de tentar novamente?"
      button={{
        text: 'Tentar novamente',
        onPress: () => refetch(),
      }}
    />
  );
}
