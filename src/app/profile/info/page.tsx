import { Metadata } from 'next';

import { Info } from '@/widgets/user/Info';

export const metadata: Metadata = {
  title: 'Profile Info',
};

const ProfileInfo = () => {
  return <Info />;
};

export default ProfileInfo;
