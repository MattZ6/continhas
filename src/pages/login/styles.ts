import { styled } from '@styles/stitches.config';

export namespace LoginPageStyles {
  export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',

    height: '100vh',
    overflow: 'hidden',
  });

  export const Content = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '32px',
    height: '100%',
  });

  export const LoginContainer = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',

    width: '80%',
  });

  export const LogoContainer = styled('figure', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',

    $$size: '68px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$elementBackground',
  });

  export const Title = styled('h1', {
    fontSize: '32px',
    color: '$textHiContrast',
    fontWeight: '500',

    '> b': {
      // color: '$brandColor',
      fontWeight: '700',
    },
  });

  export const Description = styled('p', {
    fontSize: '16px',
    // color: '$textLoContrast',
  });

  export const GoogleButton = styled('button', {
    marginTop: '16px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    height: 44,
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$elementBorder',

    backgroundColor: 'transparent',

    fontSize: '$normal',
    fontWeight: '500',

    cursor: 'pointer',

    '&:hover': {
      borderColor: '$elementHoverBorder',
      backgroundColor: '$elementHoverBackground',
    },
  });

  export const Aside = styled('aside', {
    height: '100%',
    backgroundColor: '$appSubtleBackground',

    '> img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  });
}
