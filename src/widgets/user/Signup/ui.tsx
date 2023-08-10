import { FC } from 'react';

import { Form } from '@/features/Form';

import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { signupConfig } from './config';
import { StTitle, StFooterWrapper, StLink, StContainer, StTip, StSpan } from './styled';

export const SignupForm: FC = () => {
  const footer = (
    <StFooterWrapper $flexDirection='column' $gap={48}>
      <StTextBox $fontSize={0.5} $lineHeight={0.66}>
        Нажимая на кнопку «Зарегистрироваться», я тем самым даю своё{' '}
        <StLink href=''>Согласие на обработку персональных данных</StLink>
      </StTextBox>
      <Button label='Зарегистрироваться' $designType='primary' />
    </StFooterWrapper>
  );
  return (
    <StContainer>
      <StTitle>Регистрация</StTitle>
      <StTip $fontSize={0.66} $lineHeight={1} $textAlign='center'>
        Поля, отмеченное <StSpan>*</StSpan> обязательны к заполнению
      </StTip>
      <Form fields={signupConfig} handleFormSubmit={console.log} footer={footer} asterisk={true} />
    </StContainer>
  );
};