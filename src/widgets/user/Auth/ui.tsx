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
      {/* TODO заменить функцию в onClick */}
      <StAuthFormLink
        onClick={() => {
          openModal(modalWindows.newPassword);
          console.log('Открыть форму восстановления пароля');
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
          //   TODO заменить функцию в onClick
          onClick={() => console.log('Открыть форму регистрации')}
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
