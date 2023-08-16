import { FC } from 'react';

import { Form, type TSigninParams } from '@/features/Form';
import { RecoverPassword } from '@/features/RecoverPassword';
import { Signup } from '@/features/Signup';

import { useModalContext } from '@/entities/Modal';

import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { signinConfig } from './config';
import { StContainer, StTitle, StAuthFormLink } from './styled';

export const Signin: FC = () => {
  const { openModal, closeModal } = useModalContext();

  const onSubmitHandler = (data: TSigninParams) => {
    // TODO заменить на функцию отправки данных на сервер
    // getUser(data);

    closeModal();
    console.log(data);
  };

  const footer = (
    <StFlex $flexDirection='column' $alignItems='center' $gap={40}>
      <StAuthFormLink onClick={() => openModal(<RecoverPassword />)}>Забыли пароль?</StAuthFormLink>
      <Button label='Войти' $designType='primary' />
      <StFlex $flexDirection='column' $alignItems='center' $gap={16}>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          Ещё нет профиля Агропарк?
        </StTextBox>
        <Button
          type='button'
          label='Зарегистрироваться'
          $designType='secondary'
          onClick={() => openModal(<Signup />)}
        />
      </StFlex>
    </StFlex>
  );

  return (
    <StContainer>
      <StTitle>Авторизация</StTitle>
      <Form fields={signinConfig} handleFormSubmit={onSubmitHandler} footer={footer} />
    </StContainer>
  );
};
