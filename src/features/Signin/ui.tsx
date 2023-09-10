import { FC } from 'react';

import { RecoverPassword } from '@/features/RecoverPassword';
import { Signup } from '@/features/Signup';

import { Form } from '@/entities/Form';
import { useModalContext } from '@/entities/Modal';
import { fetchSignin } from '@/entities/user/model';

import { type TSigninParams } from '@/shared/form';
import { useAppDispatch } from '@/shared/model';
import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { signinConfig } from './config';
import { StContainer, StTitle, StAuthFormLink } from './styled';

export const Signin: FC = () => {
  const { openModal, closeModal } = useModalContext();

  const dispatch = useAppDispatch();

  const onSubmitHandler = async (data: TSigninParams) => {
    await dispatch(fetchSignin(data));
    closeModal();
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
