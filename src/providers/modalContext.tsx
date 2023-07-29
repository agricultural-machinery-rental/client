'use client';
import { TLayout } from '@/types';
import { modalWindows } from '@/utils/modalWindows';
import { createContext, useState } from 'react';
export { modalWindows };
export { modalWindowContent } from '@/utils/modalWindows';

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
