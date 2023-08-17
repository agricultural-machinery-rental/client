'use client';

import { ReactNode, createContext, useState, useContext } from 'react';

import { TLayout } from '@/shared/types';

type TModalContext = {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  children: ReactNode | null;
};

const ModalContext = createContext<TModalContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  children: null,
});

export const ModalProvider: TLayout = ({ children }) => {
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setContent(content);
  };
  const closeModal = () => {
    setContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen: content !== null, openModal, closeModal, children: content }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
