import { Form } from '@/entities/Form';

import { useUserContext } from '@/shared/model/userContext';
import { Button } from '@/shared/ui/Button';

import { changePasswordConfig } from './config';
import { StContainer, StTitle, StFooterWrapper } from './styled';

export const ProfileSettings = () => {
  const { user, logout } = useUserContext();

  const footer = (
    <StFooterWrapper>
      <Button label='Сохранить изменения' $designType='primary' />
      <Button
        label='Выйти из профиля'
        type='button'
        $designType='secondary'
        onClick={() => {
          if (user) {
            logout();
            console.log('Exit');
          }
        }}
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
