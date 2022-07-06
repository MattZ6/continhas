import { createContext, useCallback, useMemo, useState } from 'react';

import { AlertDialog } from '@components/dialog';

import { AlertContextData } from './types';

export const AlertContext = createContext({} as AlertContextData.Context);

type Props = {
  children: React.ReactNode;
};

export function AlertProvider({ children }: Props) {
  const [alert, setAlert] = useState<AlertContextData.Alert | undefined>();

  const showAlert = useCallback((data: AlertContextData.Alert) => {
    setAlert(data);
  }, []);

  const contextData = useMemo<AlertContextData.Context>(() => {
    return { showAlert };
  }, [showAlert]);

  return (
    <AlertContext.Provider value={contextData}>
      <AlertDialog
        isOpen={!!alert}
        onOpenChange={() => setAlert(undefined)}
        data={{
          title: alert?.title ?? '??',
          description: alert?.description ?? '??',
          closeButtonText: alert?.closeButtonText ?? '??',
        }}
      />

      {children}
    </AlertContext.Provider>
  );
}
