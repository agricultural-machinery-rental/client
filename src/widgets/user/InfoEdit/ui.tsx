import { Form } from '@/features/Form';

import { mockUser, type TUser } from '@/shared/api/mockUser';
import { Button } from '@/shared/ui/Button';

import { profileConfig } from './config';
import { StContainer, StFooterWrapper } from './styled';

export const InfoEdit = () => {
  const defaultValues: Record<string, string> = profileConfig.reduce(
    (acc, { name }) => ({ ...acc, [name]: mockUser![name as keyof TUser] }),
    {},
  );

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
        defaultValues={defaultValues}
        footer={footer}
      />
    </StContainer>
  );
};
