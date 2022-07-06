import { styled } from '@styles/stitches.config';

export namespace BalanceStyles {
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

    paddingTop: '$small',
    paddingBottom: '$small',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$medium',

    backgroundColor: '$defaultAppBackground',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$defaultSubtleBorder',

    minWidth: '240px',
  });

  export const IconContainer = styled('figure', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '44px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$defaultElementBackground',

    marginBottom: '$small',
  });

  export const Label = styled('span', {
    fontSize: '$small',
    lineHeight: '$small',
    whiteSpace: 'nowrap',
  });

  export const Value = styled('strong', {
    fontSize: '$larger',
    lineHeight: '$large',
    whiteSpace: 'nowrap',
  });
}
