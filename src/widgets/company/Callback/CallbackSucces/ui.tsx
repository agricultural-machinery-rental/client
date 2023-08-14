import { FC } from 'react';

import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { StContainer, StTopTextBox } from './styled';

export const CallbackSuccess: FC = () => {
  return (
    <StContainer>
      <StTopTextBox>
        <StTextBox $fontSize={0.75} $lineHeight={1.25} $textAlign='center'>
          Спасибо!
        </StTextBox>
        <br />
        <StTextBox $fontSize={0.75} $lineHeight={1.25} $textAlign='center'>
          Ваша заявка отправлена, ожидайте звонок от нашего менеджера.
        </StTextBox>
      </StTopTextBox>
      <Button label='На главную' $designType='secondary' />
    </StContainer>
  );
};
