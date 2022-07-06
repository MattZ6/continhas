import { styled } from '@styles/stitches.config';

export namespace TransactionFormStyle {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    $$size: '360px',

    width: '$$size',

    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '$defaultSubtleBorder',

    marginRight: '-$$size',

    transitionProperty: 'margin-right',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-in-out',

    variants: {
      open: {
        true: {
          marginRight: '0px',
        },
      },
    },
  });

  export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    paddingTop: '$normal',
    paddingBottom: '$normal',
    paddingLeft: '$medium',
    paddingRight: '$normal',
  });

  export const BackButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '40px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: 'transparent',
    border: 'none',
    color: '$defaultTextHiContrastColor',

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$elementHoverBackground',
    },
  });

  export const Title = styled('h3', {
    flex: 1,

    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '600',
    color: '$defaultTextHiContrastColor',
  });

  export const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$small',

    padding: '$medium',
  });

  export const TypeFieldContainer = styled('div', {
    marginBottom: '$small',
  });

  export const FieldsRow = styled('div', {
    display: 'flex',
    gap: '$normal',

    '> div': {
      flex: 1,
    },
  });

  export const SubmitButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',

    minWidth: '100px',
    height: '40px',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$normal',
    border: 'none',

    backgroundColor: '$brandSolidBackground',
    color: '$white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '$normal',
    lineHeight: '$normal',

    cursor: 'pointer',
  });
}
