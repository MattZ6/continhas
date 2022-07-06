import { Plus } from 'phosphor-react';
import { memo, useMemo } from 'react';

import { useAuth } from '@hooks/useAuth';

import { PageHeader } from '@components/PageHeader';

import { HomePageHeaderStyles as Styles } from './styles';

type Props = {
  isButtonHidden: boolean;
  onButtonPressed: () => void;
};

function Component({
  isButtonHidden: isTransactionFormOpen,
  onButtonPressed,
}: Props) {
  const { profile } = useAuth();

  const title = useMemo(() => {
    if (!profile) {
      return 'Olá';
    }

    return `Olá, ${profile.first_name}`;
  }, [profile]);

  return (
    <PageHeader
      title={title}
      subtitle="Acompanhe o resumo mensal de suas contas"
    >
      <Styles.CreateTransactionButton
        type="button"
        disabled={isTransactionFormOpen}
        hidden={isTransactionFormOpen}
        onClick={onButtonPressed}
      >
        <Plus size={24} />
      </Styles.CreateTransactionButton>
    </PageHeader>
  );
}

export const HomePageHeader = memo(Component);
