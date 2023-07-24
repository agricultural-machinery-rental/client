'use client';
import { ModalContext } from '@/providers/modalContext';
import { MouseEventHandler, useContext } from 'react';
import { StModalBackground, StModalWindow } from './styled';

const Modal = () => {
  const { isOpen, closeModal } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  const backgroundClickHandler: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <StModalBackground onClick={backgroundClickHandler}>
      <StModalWindow>
        <div>Modal Window</div>
        <span onClick={closeModal}>Close</span>
      </StModalWindow>
    </StModalBackground>
  );
};

export { Modal };
