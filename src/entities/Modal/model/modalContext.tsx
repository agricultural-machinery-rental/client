'use client';

import { ReactNode, createContext, useState, useContext } from 'react';

import { TLayout } from '@/shared/model';

type TModalContext = {
  isOpen: boolean;
  openModal: (content: ReactNode, noClose?: boolean) => void;
  closeModal: () => void;
  children: ReactNode | null;
  noClose: boolean;
};

const ModalContext = createContext<TModalContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  children: null,
  noClose: false,
});

export const ModalProvider: TLayout = ({ children }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [noClose, setNoClose] = useState(false);

  const openModal = (content: ReactNode, noClose?: boolean) => {
    setContent(content);
    setNoClose(!!noClose);
  };
  const closeModal = () => {
    setContent(null);
    setNoClose(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen: content !== null, openModal, closeModal, children: content, noClose }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
