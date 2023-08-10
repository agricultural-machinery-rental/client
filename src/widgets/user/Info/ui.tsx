import { FC } from 'react';

import { PATH } from '@/shared/constants/path';
import { StFlex } from '@/shared/styles/global';
import { Input } from '@/shared/ui/Input';

import { mockUser } from '../mockUser';

import Edit from './assets/edit.svg';
import { profileLabels, nameFields } from './consts';
import { StContainer, StIcon, StName } from './styled';

export const Info: FC = () => {
  const userName = Object.entries(mockUser).filter(([key]) => nameFields.includes(key));
  const restUserInfo = Object.entries(mockUser).filter(([key]) => !nameFields.includes(key));

  return (
    <StContainer $flexDirection='column' $gap={16}>
      <StIcon href={PATH.ProfileEdit}>
        <Edit width={24} height={24} />
      </StIcon>
      <div>
        {userName.map(([key, value]) => (
          <StName key={key} $fontSize={1} $lineHeight={1.33} $fontWeight={600} $textAlign='left'>
            {value}{' '}
          </StName>
        ))}
      </div>
      <StFlex $flexDirection='column' $gap={16}>
        {restUserInfo.map(([key, value]) => (
          <Input
            key={key}
            placeholder={value}
            label={!value ? profileLabels[key] : undefined}
            disabled
          />
        ))}
      </StFlex>
    </StContainer>
  );
};
