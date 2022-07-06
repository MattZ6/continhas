import { Skeleton } from '@components/Skeleton';

import { ListLoadingStyles as Styles } from './styles';

function Header() {
  return (
    <Styles.Header>
      <Skeleton width="120px" height="20px" borderRadius="4px" />
    </Styles.Header>
  );
}

function Item() {
  return (
    <Styles.Item>
      <Skeleton width="44px" height="44px" borderRadius="8px" />

      <Styles.ItemContent>
        <Skeleton width="50%" height="20px" borderRadius="4px" />
        <Skeleton width="30%" height="16px" borderRadius="4px" />
      </Styles.ItemContent>
    </Styles.Item>
  );
}

export function ListLoading() {
  return (
    <Styles.Container>
      <Styles.MonthContainer>
        <Header />
        <Item />
      </Styles.MonthContainer>

      <Styles.MonthContainer>
        <Header />
        <Item />
        <Item />
      </Styles.MonthContainer>
    </Styles.Container>
  );
}
