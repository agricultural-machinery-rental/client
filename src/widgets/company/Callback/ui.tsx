import { FC, useContext } from 'react';

import { Form } from '@/features/Form';

import { ModalContext } from '@/entities/Modal';

import { modalWindows } from '@/shared/modal/modalWindows';
import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { callbackConfig } from './config';
import { StContainer, StTopTextBox, StFooterWrapper, StLink } from './styled';

export const Callback: FC = () => {
  const { openModal } = useContext(ModalContext);

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
    <StContainer>
      <StTopTextBox>
        <StTextBox>Здравствуйте!</StTextBox>
        <br />
        <StTextBox>Оставьте свой номер, и мы Вам обязательно перезвоним!</StTextBox>
      </StTopTextBox>
      <Form
        handleFormSubmit={() => openModal(modalWindows.callbackSuccess)}
        fields={callbackConfig}
        footer={footer}
      />
    </StContainer>
  );
};
