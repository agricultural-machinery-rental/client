'use client';

import React, { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

import { Close } from './Close';
import { useModalContext } from './model/modalContext';
import { StModalBackground, StModalWindow } from './styled';

export const Modal = () => {
  const { isOpen, closeModal, children, noClose } = useModalContext();
  if (!isOpen) {
    return null;
  }

  const backgroundClickHandler: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget && !noClose) {
      closeModal();
    }
  };

  return createPortal(
    <StModalBackground onClick={backgroundClickHandler}>
      <StModalWindow>
        {!noClose && <Close onClick={closeModal} />}
        {children}
      </StModalWindow>
    </StModalBackground>,
    document.body,
  );
};
