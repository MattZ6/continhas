import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { ConfirmDialogStyles as Styles } from './styles';

type Data = {
  title: string;
  description: string;
  primaryAction?: 'CANCEL' | 'ACTION';
  cancelButtonText?: string;
  confirmButtonText?: string;
};

type Props = {
  data: Data;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: () => void;
};

export function ConfirmDialog({ data, isOpen, onOpenChange, onSubmit }: Props) {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <Styles.Overlay />

        <Styles.Content>
          <Styles.Title>{data.title}</Styles.Title>
          <Styles.Description>{data.description}</Styles.Description>

          <Styles.Actions>
            <Styles.Cancel primary={data.primaryAction === 'CANCEL'}>
              {data.cancelButtonText ?? 'Cancelar'}
            </Styles.Cancel>
            <Styles.Action onClick={() => onSubmit()}>
              {data.confirmButtonText ?? 'Ok'}
            </Styles.Action>
          </Styles.Actions>
        </Styles.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
