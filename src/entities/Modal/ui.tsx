'use client';

import React, { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

import { Close } from './Close';
import { useModalContext } from './model/modalContext';
import { StModalBackground, StModalWindow } from './styled';

export const Modal = () => {
  const { isOpen, closeModal, children } = useModalContext();

  if (!isOpen) {
    return null;
  }

  const backgroundClickHandler: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <StModalBackground onClick={backgroundClickHandler}>
      <StModalWindow>
        <Close onClick={closeModal} />
        {children}
      </StModalWindow>
    </StModalBackground>,
    document.body,
  );
};
