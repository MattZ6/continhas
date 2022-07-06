import { Skeleton } from '@components/Skeleton';

import { BalanceLoadingStyles as Styles } from './styles';

function SkeletonCard() {
  return (
    <Styles.Card>
      <Styles.IconContainer>
        <Skeleton width="44px" height="44px" borderRadius="44px" />
      </Styles.IconContainer>
      <Skeleton width="100px" height="16px" borderRadius="4px" />
      <Skeleton width="90%" height="32px" borderRadius="4px" />
    </Styles.Card>
  );
}

export function BalanceLoading() {
  return (
    <Styles.Container>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </Styles.Container>
  );
}
