'use client';

import React, { MouseEventHandler, useContext } from 'react';
import { createPortal } from 'react-dom';

import { modalWindowContent } from '@/shared/modal/modalWindows';

import { Close } from './Close';
import { ModalContext } from './model/modalContext';
import { StModalBackground, StModalWindow } from './styled';

export const Modal = () => {
  const { isOpen, closeModal, content } = useContext(ModalContext);

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
        {content && modalWindowContent[content]}
      </StModalWindow>
    </StModalBackground>,
    document.body,
  );
};
