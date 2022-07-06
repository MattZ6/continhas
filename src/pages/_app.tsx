import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AlertProvider } from '@contexts/Alert';
import { AuthProvider } from '@contexts/Auth';

import { globalStyles } from '@styles/stitches.config';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const [hasInitializedInClientSide, setHasInitializedInClientSide] =
    useState(false);

  useEffect(() => {
    setHasInitializedInClientSide(true);
  }, []);

  if (!hasInitializedInClientSide) {
    return null;
  }

  const getLayout =
    (Component as any).getLayout || ((page: JSX.Element) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AlertProvider>{getLayout(<Component {...pageProps} />)}</AlertProvider>
      </AuthProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
