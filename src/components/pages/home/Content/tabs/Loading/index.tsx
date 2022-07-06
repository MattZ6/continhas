import { memo } from 'react';

import { Skeleton } from '@components/Skeleton';

import { TabsLoadingStyles as Styles } from './styles';

function Component() {
  return (
    <Styles.Container>
      <Skeleton width="100px" height="32px" borderRadius="32px" />
      <Skeleton width="100px" height="32px" borderRadius="32px" />
      <Skeleton width="100px" height="32px" borderRadius="32px" />
      <Skeleton width="100px" height="32px" borderRadius="32px" />
    </Styles.Container>
  );
}

export const TabsLoading = memo(Component);
