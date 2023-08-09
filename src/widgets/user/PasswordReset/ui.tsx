import { FC } from 'react';

import { Form } from '@/features/Form';

import { Button } from '@/shared/ui/Button';

import { passwordResetConfig } from './config';
import { StContainer, StTitle, StSendingMessage, StFooterWrapper } from './styled';

export const PasswordReset: FC = () => {
  const success = false; // TODO заменить на ответ с бэка

  const footer = (
    <StFooterWrapper $flexDirection='column' $alignItems='center' $gap={24}>
      <StSendingMessage $fontSize={0.5} $lineHeight={0.66}>
        {success && 'на почту отправлена ссылка, по которой можно поменять пароль'}
      </StSendingMessage>
      <Button label='Восстановить пароль' $designType='secondary' />
    </StFooterWrapper>
  );

  return (
    <StContainer>
      <StTitle>Восстановление пароля</StTitle>
      <Form fields={passwordResetConfig} handleFormSubmit={console.log} footer={footer} />
    </StContainer>
  );
};
