import { useRouter } from 'next/router';
import { GoogleLogo } from 'phosphor-react';
import { useCallback, useEffect } from 'react';

import { useAlert } from '@hooks/useAlert';
import { useAuth } from '@hooks/useAuth';

import { LoadingSpinner } from '@components/Spinner';

import { GoogleSignInButtonStyles as Styles } from './styles';

type Props = {
  loginUrl: string;
};

export function GoogleSignInButton({ loginUrl }: Props) {
  const { query, replace } = useRouter();
  const { showAlert } = useAlert();
  const { isSigning, signInWithGoogle } = useAuth();

  const handleLogin = useCallback(() => {
    window.open(loginUrl, '_self');
  }, [loginUrl]);

  useEffect(() => {
    async function login(code: string) {
      try {
        await signInWithGoogle({ code });

        replace('/');
      } catch (error) {
        // const parsedError = parseRequestError(error);

        // TODO: Tratar os erros

        showAlert({
          title: 'Falha no login',
          description:
            'Por favor, aguarde alguns instantes e em seguida tente novamente.',
          closeButtonText: 'Entendi',
        });
      }
    }

    if (query.code) {
      login(query.code as string);
    }
  }, [query.code, replace, signInWithGoogle, showAlert]);

  return (
    <Styles.Button
      submiting={isSigning}
      disabled={isSigning}
      onClick={handleLogin}
    >
      {isSigning ? (
        <LoadingSpinner />
      ) : (
        <>
          <GoogleLogo size={24} weight="bold" />
          Continuar com o Google
        </>
      )}
    </Styles.Button>
  );
}
