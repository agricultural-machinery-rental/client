import { Form } from '@/features/Form';

import { Button } from '@/shared/ui/Button';

import { mockUser, UserType } from '../mockUser';

import { profileConfig } from './config';
import { StContainer, StFooterWrapper } from './styled';

export const InfoEdit = () => {
  const defaultValues: Record<string, string> = profileConfig.reduce(
    (acc, { name }) => ({ ...acc, [name]: mockUser![name as keyof UserType] }),
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
