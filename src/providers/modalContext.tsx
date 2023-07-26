'use client';
import { TLayout } from '@/types';
import { createContext, useState } from 'react';

export enum modalWindows {
  example = 'example',
}

export const modalWindowContent = {
  [modalWindows.example]: <span>Компонент содержимого окна</span>,
} as const;

type TModalContext = {
  isOpen: boolean;
  openModal: (content: modalWindows) => void;
  closeModal: () => void;
  content: modalWindows | null;
};

export const ModalContext = createContext<TModalContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  content: null,
});

export const ModalProvider: TLayout = ({ children }) => {
  const [content, setContent] = useState<modalWindows | null>(null);

  const openModal = (content: modalWindows) => {
    setContent(content);
  };
  const closeModal = () => setContent(null);

  return (
    <ModalContext.Provider value={{ isOpen: content !== null, openModal, closeModal, content }}>
      {children}
    </ModalContext.Provider>
  );
};
