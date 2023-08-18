import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { useModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTopTextBox } from './styled';

export const CallbackSuccess: FC = () => {
  const router = useRouter();
  const { closeModal } = useModalContext();

  const handleClick = () => {
    router.push(PATH.MainPage);
    closeModal();
  };

  return (
    <StContainer>
      <StTopTextBox>
        <StTextBox>Спасибо!</StTextBox>
        <br />
        <StTextBox>Ваша заявка отправлена, ожидайте звонок от нашего менеджера.</StTextBox>
      </StTopTextBox>
      <Button label='На главную' $designType='secondary' onClick={handleClick} />
    </StContainer>
  );
};
