import { FC } from 'react';

import { Form } from '@/features/Form';

import { Button } from '@/shared/ui/Button';

import { newPasswordConfig } from './config';
import { StContainer, StTitle, StFooterWrapper, StTip } from './styled';

export const NewPassword: FC = () => {
  const success = true; // TODO заменить на ответ с бэка

  const footer = (
    <StFooterWrapper>
      <Button
        label='Сменить пароль'
        $designType='secondary'
        onClick={() => success && console.log('Открыть форму входа в ЛК?')}
      />
    </StFooterWrapper>
  );

  return (
    <StContainer>
      <StTitle>Новый пароль</StTitle>
      <StTip>Пароль должен содержать от 8 латинских заглавных и строчных букв и цифр</StTip>
      <Form fields={newPasswordConfig} handleFormSubmit={console.log} footer={footer} />
    </StContainer>
  );
};
