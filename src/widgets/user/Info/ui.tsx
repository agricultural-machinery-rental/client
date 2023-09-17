import { FC } from 'react';

import { PATH } from '@/shared/constants/path';
import Edit from '@/shared/icons/edit.svg';
import { objectEntries } from '@/shared/lib';
import { useGetUser } from '@/shared/store/user';
import { StFlex } from '@/shared/styles/global';
import { Input } from '@/shared/ui/Input';

import { profileLabels, nameFields, restFields } from './consts';
import { StContainer, StIcon, StNameWrapper, StName } from './styled';

export const Info: FC = () => {
  const user = useGetUser();

  if (!user) return null;

  const userName = objectEntries(user).filter(([key]) => nameFields.includes(key));
  const restUserInfo = objectEntries(user).filter(([key]) => restFields.includes(key));

  return (
    <StContainer $flexDirection='column' $gap={16}>
      <StIcon href={PATH.ProfileEdit}>
        <Edit width={24} height={24} />
      </StIcon>
      <StNameWrapper>
        {userName.map(([key, value]) => (
          <StName key={key} $fontSize={1} $lineHeight={1.33} $fontWeight={600} $textAlign='left'>
            {value}{' '}
          </StName>
        ))}
      </StNameWrapper>
      <StFlex $flexDirection='column' $gap={16}>
        {restUserInfo.map(([key, value]) => (
          <Input
            key={key}
            placeholder={value?.toString()}
            label={!value ? profileLabels[key]!.toString() : undefined}
            disabled
          />
        ))}
      </StFlex>
    </StContainer>
  );
};
