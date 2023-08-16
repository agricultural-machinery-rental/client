import { FC, useState } from 'react';

import { Form } from '@/entities/Form';

import { type TCallbackParams } from '@/shared/form';
import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { CallbackSuccess } from './CallbackSucces';
import { callbackConfig } from './config';
import { StContainer, StTopTextBox, StFooterWrapper, StLink } from './styled';

export const Callback: FC = () => {
  const [status, setStatus] = useState<'pending' | 'success'>('pending');

  const onSubmitHandler = (data: TCallbackParams) => {
    // TODO заменить на функцию отправки данных на сервер
    // postCallback(data).then(() => setStatus('success'))

    // Для презентации отображаем успешную отправку данных
    setStatus('success');
    console.log(data);
  };

  const footer = (
    <StFooterWrapper $flexDirection='column' $gap={24}>
      <Button label='Позвоните мне' $designType='primary' />
      <StTextBox $fontSize={0.5} $lineHeight={0.66}>
        Нажимая на кнопку «Зарегистрироваться», я тем самым даю своё{' '}
        <StLink href=''>Согласие на обработку персональных данных</StLink>
      </StTextBox>
    </StFooterWrapper>
  );

  return (
    <>
      {status === 'pending' ? (
        <StContainer>
          <StTopTextBox>
            <StTextBox>Здравствуйте!</StTextBox>
            <br />
            <StTextBox>Оставьте свой номер, и мы Вам обязательно перезвоним!</StTextBox>
          </StTopTextBox>
          <Form handleFormSubmit={onSubmitHandler} fields={callbackConfig} footer={footer} />
        </StContainer>
      ) : (
        <CallbackSuccess />
      )}
    </>
  );
};
