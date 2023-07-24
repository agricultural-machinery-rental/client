'use client';
import { ModalContext } from '@/providers/modalContext';
import { MouseEventHandler, useContext } from 'react';
import { StModalBackground, StModalWindow } from './styled';
import { Close } from './Close';
import { Title } from './Title';

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
        <Close onClick={closeModal} />
        <Title title='Modal Window' />
      </StModalWindow>
    </StModalBackground>
  );
};

export { Modal };
