import { FC, useState } from 'react';

import { Form, type TRecoverPasswordParams } from '@/entities/Form';

import { Button } from '@/shared/ui/Button';

import { passwordResetConfig } from './config';
import { StContainer, StTitle, StSendingMessage, StFooterWrapper } from './styled';

export const RecoverPassword: FC = () => {
  const [status, setStatus] = useState<'pending' | 'success'>('pending');

  const onSubmitHandler = (data: TRecoverPasswordParams) => {
    // TODO заменить на функцию отправки данных на сервер
    // postUserPasswordReset(data).then(() => setStatus('success'));

    // Для презентации отображаем успешную отправку данных
    setStatus('success');
    console.log(data);
  };

  const footer = (
    <StFooterWrapper $flexDirection='column' $alignItems='center' $gap={24}>
      <StSendingMessage $fontSize={0.5} $lineHeight={0.66}>
        {status === 'success' && 'на почту отправлена ссылка, по которой можно поменять пароль'}
      </StSendingMessage>
      <Button label='Восстановить пароль' $designType='secondary' />
    </StFooterWrapper>
  );

  return (
    <StContainer>
      <StTitle>Восстановление пароля</StTitle>
      <Form fields={passwordResetConfig} handleFormSubmit={onSubmitHandler} footer={footer} />
    </StContainer>
  );
};
