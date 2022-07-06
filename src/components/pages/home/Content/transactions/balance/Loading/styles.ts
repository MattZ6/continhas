import { styled } from '@styles/stitches.config';

export namespace BalanceLoadingStyles {
  export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$small',

    paddingTop: '$normal',
    paddingBottom: '$normal',
    paddingLeft: '$medium',
    paddingRight: '$medium',

    position: 'sticky',
    top: '0',

    overflowY: 'hidden',
    overflowX: 'auto',

    backgroundColor: '$defaultAppBackground',
  });

  export const Card = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',

    paddingTop: '$small',
    paddingBottom: '$small',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$medium',

    backgroundColor: '$defaultAppBackground',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$defaultElementBackground',

    minWidth: '240px',
  });

  export const IconContainer = styled('figure', {
    marginBottom: '4px',
  });
}
