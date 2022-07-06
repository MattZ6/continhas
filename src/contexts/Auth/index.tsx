import { decode, JwtPayload } from 'jsonwebtoken';
import Router from 'next/router';
import { createContext, useCallback, useMemo, useState } from 'react';

import { saveAuthentication } from '@services/simpleFinancesAPI/apiClient';
import { GoogleLoginService } from '@services/simpleFinancesAPI/loginWithGoogle';

import { AuthCookies } from '@utils/authCookies';

import { AuthContextData } from './types';

export const AuthContext = createContext({} as AuthContextData.Context);

type Props = {
  children: React.ReactNode;
};

function extractTokenPayload(jwt: string): AuthContextData.Profile | undefined {
  const decodedJWT = decode(jwt) as JwtPayload | null;

  if (!decodedJWT) {
    return undefined;
  }

  const name = String(decodedJWT.name ?? '');
  const [first_name] = name.split(' ');

  return {
    name,
    first_name,
    avatar_url: decodedJWT.avatar_url,
  };
}

export function AuthProvider({ children }: Props) {
  const [isSigning, setIsSigning] = useState(false);
  const [payload, setPayload] = useState<AuthContextData.Payload | undefined>(
    () => {
      const authCookies = AuthCookies.getAuthCookies();

      if (!authCookies.access_token || !authCookies.refresh_token) {
        return undefined;
      }

      const authentication = {
        access_token: authCookies.access_token,
        refresh_token: authCookies.refresh_token,
      };

      const profile = extractTokenPayload(authentication.access_token)!;

      return {
        authentication,
        profile,
      };
    }
  );

  const signInWithGoogle = useCallback(
    async ({ code }: AuthContextData.GoogleSignInData) => {
      try {
        setIsSigning(true);

        const { data } = await GoogleLoginService.execute({ code });

        saveAuthentication(data);

        const profile = extractTokenPayload(data.access_token)!;

        setPayload({
          authentication: data,
          profile,
        });
      } finally {
        setIsSigning(false);
      }
    },
    []
  );

  const signOut = useCallback(() => {
    // setPayload(undefined);
    AuthCookies.destroyAuthCookies();
    Router.replace('/login');
  }, []);

  const contextData = useMemo<AuthContextData.Context>(() => {
    return {
      isSigning,
      signInWithGoogle,
      signOut,
      profile: payload?.profile,
    };
  }, [isSigning, signInWithGoogle, signOut, payload]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
