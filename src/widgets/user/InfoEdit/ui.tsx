import { Form } from '@/entities/Form';

import { useAppSelector } from '@/shared/store';
import { useGetUser } from '@/shared/store/user';
import { Button } from '@/shared/ui/Button';

import { profileConfig } from './config';
import { StContainer, StFooterWrapper } from './styled';

export const InfoEdit = () => {
  const user = useAppSelector(useGetUser);

  if (!user) return null;

  const footer = (
    <StFooterWrapper>
      <Button label='Сохранить изменения' />
    </StFooterWrapper>
  );

  return (
    <StContainer>
      <Form
        fields={profileConfig}
        handleFormSubmit={console.log}
        defaultValues={user}
        footer={footer}
      />
    </StContainer>
  );
};
