'use client';

import { useRouter } from 'next/navigation';

import { ProfileNav } from '@/widgets/ProfileNav';

import { PATH } from '@/shared/constants/path';
import { TLayout } from '@/shared/model';
import { useUserContext } from '@/shared/model/userContext';
import { StFlex, StContainer } from '@/shared/styles/global';

import { profileLinks } from './consts';

const ProfileLayout: TLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useUserContext();

  if (!user) {
    router.push(PATH.MainPage);
    return null;
  }

  return (
    <StContainer>
      <StFlex $gap={127}>
        <ProfileNav links={profileLinks} />
        {children}
      </StFlex>
    </StContainer>
  );
};

export default ProfileLayout;
