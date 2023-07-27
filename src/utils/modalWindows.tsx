export enum modalWindows {
  example = 'example',
}

export const modalWindowContent = {
  [modalWindows.example]: <span>Компонент содержимого окна</span>,
} as const;
