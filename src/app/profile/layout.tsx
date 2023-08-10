import { ProfileNav } from '@/widgets/ProfileNav';

import { StFlex, StContainer } from '@/shared/styles/global';
import { TLayout } from '@/shared/types';

import { profileLinks } from './consts';

const ProfileLayout: TLayout = ({ children }) => {
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
