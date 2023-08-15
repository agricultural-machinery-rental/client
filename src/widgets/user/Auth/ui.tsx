import { FC, useContext } from 'react';

import { Form } from '@/features/Form';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { signinConfig } from './config';
import { StContainer, StTitle, StAuthFormLink } from './styled';

export const AuthForm: FC = () => {
  const { openModal } = useContext(ModalContext);

  const footer = (
    <StFlex $flexDirection='column' $alignItems='center' $gap={40}>
      <StAuthFormLink
        onClick={() => {
          openModal(modalWindows.newPassword);
        }}
      >
        Забыли пароль?
      </StAuthFormLink>
      <Button label='Войти' $designType='primary' />
      <StFlex $flexDirection='column' $alignItems='center' $gap={16}>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          Ещё нет профиля Агропарк?
        </StTextBox>
        <Button
          type='button'
          label='Зарегистрироваться'
          $designType='secondary'
          onClick={() => openModal(modalWindows.signup)}
        />
      </StFlex>
    </StFlex>
  );

  return (
    <StContainer>
      <StTitle>Авторизация</StTitle>
      {/* TODO заменить handleFormSubmit */}
      <Form fields={signinConfig} handleFormSubmit={console.log} footer={footer} />
    </StContainer>
  );
};
