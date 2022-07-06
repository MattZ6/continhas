import { AlertDialogStyles as Styles } from './styles';
import { AlertDialogProps as Data } from './types';

export function AlertDialog({ isOpen, onOpenChange, data }: Data.Props) {
  return (
    <Styles.Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Styles.Portal>
        <Styles.Overlay />

        <Styles.Content>
          <Styles.Title>{data.title}</Styles.Title>
          <Styles.Description>{data.description}</Styles.Description>

          <Styles.CloseButton>{data.closeButtonText}</Styles.CloseButton>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Dialog>
  );
}
