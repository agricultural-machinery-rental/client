import { FC } from 'react';

import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTopTextBox } from './styled';

export const CallbackSuccess: FC = () => {
  return (
    <StContainer>
      <StTopTextBox>
        <StTextBox>Спасибо!</StTextBox>
        <br />
        <StTextBox>Ваша заявка отправлена, ожидайте звонок от нашего менеджера.</StTextBox>
      </StTopTextBox>
      <Button label='На главную' $designType='secondary' />
    </StContainer>
  );
};
