import { Metadata } from 'next';

import { Info } from '@/widgets/user/Info';
// import { InfoEdit } from '@/widgets/user/InfoEdit';

export const metadata: Metadata = {
  title: 'Profile',
};

const Profile = () => {
  return <Info />;
};

export default Profile;
