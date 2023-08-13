import { Form } from '@/features/Form';

import { Button } from '@/shared/ui/Button';

import { changePasswordConfig } from './config';
import { StContainer, StTitle, StFooterWrapper } from './styled';

export const ProfileSettings = () => {
  const footer = (
    <StFooterWrapper>
      <Button label='Сохранить изменения' $designType='primary' />
      <Button
        label='Выйти из профиля'
        type='button'
        $designType='secondary'
        onClick={() => console.log('Выйти из профиля')}
      />
    </StFooterWrapper>
  );

  return (
    <StContainer>
      <StTitle>Сменить пароль</StTitle>
      <Form fields={changePasswordConfig} handleFormSubmit={console.log} footer={footer} />
    </StContainer>
  );
};
