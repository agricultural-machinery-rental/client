'use client';
import { ModalContext } from '@/providers/modalContext';
import { MouseEventHandler, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StModalBackground, StModalWindow } from './styled';
import { Close } from './Close';
import { Title } from './Title';

const Modal = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const [portalDiv, setPortalDiv] = useState<HTMLElement>();

  useEffect(() => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    setPortalDiv(div);

    return () => {
      document.body.removeChild(div);
    };
  }, []);

  if (!isOpen || !portalDiv) {
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
        <Title title='Modal Window' />
      </StModalWindow>
    </StModalBackground>,
    portalDiv,
  );
};

export { Modal };
