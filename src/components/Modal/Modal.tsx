'use client';
import { ModalContext, modalWindowContent } from '@/providers/modalContext';
import React, { MouseEventHandler, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StModalBackground, StModalWindow } from './styled';
import { Close } from './Close';
import { zindex } from '@/styles/zindex';

const Modal = () => {
  const { isOpen, closeModal, content } = useContext(ModalContext);
  const [portalDiv, setPortalDiv] = useState<HTMLElement>();

  useEffect(() => {
    const div = document.createElement('div');
    div.style.zIndex = zindex.modal.toString();
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
        {content && modalWindowContent[content]}
      </StModalWindow>
    </StModalBackground>,
    portalDiv,
  );
};

export { Modal };
