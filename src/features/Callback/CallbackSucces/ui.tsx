import Link from 'next/link';
import { FC, useContext } from 'react';

import { ModalContext } from '@/entities/Modal';

import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTopTextBox } from './styled';

export const CallbackSuccess: FC = () => {
  const { closeModal } = useContext(ModalContext);

  const handleClick = () => {
    closeModal();
  };

  return (
    <StContainer>
      <StTopTextBox>
        <StTextBox>Спасибо!</StTextBox>
        <br />
        <StTextBox>Ваша заявка отправлена, ожидайте звонок от нашего менеджера.</StTextBox>
      </StTopTextBox>
      <Link href='/'>
        <Button label='На главную' $designType='secondary' onClick={handleClick} />
      </Link>
    </StContainer>
  );
};
