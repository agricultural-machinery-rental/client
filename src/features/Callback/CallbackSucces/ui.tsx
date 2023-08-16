<<<<<<< HEAD:src/features/Callback/CallbackSucces/ui.tsx
import { useRouter } from 'next/navigation';
import { FC } from 'react';
=======
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
>>>>>>> d8a296b (fix Link on Button):src/widgets/company/Callback/CallbackSucces/ui.tsx

import { useModalContext } from '@/entities/Modal';

import { PATH } from '@/shared/constants/path';
import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTopTextBox } from './styled';

export const CallbackSuccess: FC = () => {
  const router = useRouter();
<<<<<<< HEAD:src/features/Callback/CallbackSucces/ui.tsx
  const { closeModal } = useModalContext();

  const handleClick = () => {
    router.push(PATH.MainPage);
=======
  const { closeModal } = useContext(ModalContext);

  const handleClick = () => {
    router.push('/');
>>>>>>> d8a296b (fix Link on Button):src/widgets/company/Callback/CallbackSucces/ui.tsx
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
