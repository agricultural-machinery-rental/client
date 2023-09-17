'use client';

import { useRouter } from 'next/navigation';

import { ProfileNav } from '@/widgets/ProfileNav';

import { PATH } from '@/shared/constants/path';
import { TLayout } from '@/shared/model';
import { useAuth } from '@/shared/store/user';
import { StFlex, StContainer } from '@/shared/styles/global';

import { profileLinks } from './consts';

const ProfileLayout: TLayout = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth) {
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
