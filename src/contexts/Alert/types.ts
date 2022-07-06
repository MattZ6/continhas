export namespace AlertContextData {
  type Base = {
    title: string;
    description: string;
    closeButtonText?: string;
  };

  export type Alert = Base;

  export type Context = {
    showAlert: (data: Alert) => void;
  };
}
