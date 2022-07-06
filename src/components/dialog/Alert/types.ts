export namespace AlertDialogProps {
  export type Data = {
    title: string;
    description: string;
    closeButtonText: string;
  };

  export type Props = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    data: Data;
  };
}
