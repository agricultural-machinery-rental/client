import { FC } from 'react';

import { StFlex, StTextBox } from '@/shared/styles/global';
import { Input } from '@/shared/ui/Input';

import { mockUser } from '../mockUser';

import Edit from './assets/edit.svg';
import { profileLabels, nameFields } from './consts';
import { StContainer, StIcon, StName } from './styled';

export const Info: FC = () => {
  const userName = Object.entries(mockUser).filter(data => nameFields.includes(data[0]));
  const restUserInfo = Object.entries(mockUser).filter(data => !nameFields.includes(data[0]));

  return (
    <StContainer $flexDirection='column' $gap={16}>
      <div>
        {userName.map((data, key) => (
          <StName key={key} $fontSize={1} $lineHeight={1.33} $fontWeight={600} $textAlign='left'>
            {data[1]}{' '}
          </StName>
        ))}
      </div>
      <StFlex $flexDirection='column' $gap={16}>
        <StIcon href=''>
          <Edit width={24} height={24} />
        </StIcon>
        {restUserInfo.map((data, key) => (
          <Input
            key={key}
            placeholder={data[1]}
            label={!data[1] ? profileLabels[data[0]] : undefined}
            disabled
          />
        ))}
      </StFlex>
    </StContainer>
  );
};
