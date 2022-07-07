import { styled } from '@styles/stitches.config';

import piggyImg from '../../../../public/piggy.png';

export namespace LoginPageStyles {
  export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '420px 1fr',

    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '$brandAppSubtleBackground',

    '@media screen and (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  });

  export const Content = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: '420px',
    width: '100%',
    backgroundColor: '$brandAppBackground',
    padding: '$large',
    height: '100%',

    '@media screen and (max-width: 1024px)': {
      position: 'absolute',
      left: 0,
      right: 0,

      margin: '0 auto',
    },
  });

  export const LoginContainer = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',
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

    backgroundColor: '$brandElementBackground',
    color: '$brandSolidBackground',
  });

  export const Title = styled('h1', {
    fontSize: '32px',
    fontWeight: '500',
    color: '$brandTextHiContrastColor',

    '> b': {
      fontWeight: '700',
      color: '$brandSolidBackground',
    },
  });

  export const Description = styled('p', {
    fontSize: '$medium',
    color: '$brandTextHiContrastColor',
  });

  export const Aside = styled('aside', {
    height: '100%',
    backgroundColor: '$brandAppSubtleBackground',
    overflow: 'hidden',

    backgroundImage: `url(${piggyImg.src})`,

    '> img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  });
}
