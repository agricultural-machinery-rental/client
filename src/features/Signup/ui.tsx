import { FC } from 'react';

import { Signin } from '@/features/Signin';

import { Consent } from '@/entities/Consent';
import { Form } from '@/entities/Form';
import { useModalContext } from '@/entities/Modal';

import { type TSignupParams } from '@/shared/form';
import { useAppDispatch } from '@/shared/store';
import { fetchSignup } from '@/shared/store/user';
import { StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { signupConfig } from './config';
import { StTitle, StFooterWrapper, StLink, StContainer, StTip, StSpan } from './styled';

export const Signup: FC = () => {
  const { openModal } = useModalContext();

  const dispatch = useAppDispatch();

  const onSubmitHandler = (data: TSignupParams) => {
    dispatch(fetchSignup(data)).then(() => openModal(<Signin />));
  };

  const footer = (
    <StFooterWrapper $flexDirection='column' $gap={48}>
      <StTextBox $fontSize={0.5} $lineHeight={0.66}>
        Нажимая на кнопку «Зарегистрироваться», я тем самым даю своё{' '}
        <StLink onClick={() => openModal(<Consent />)}>
          Согласие на обработку персональных данных
        </StLink>
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
      <Form
        fields={signupConfig}
        handleFormSubmit={onSubmitHandler}
        footer={footer}
        asterisk={true}
      />
    </StContainer>
  );
};
