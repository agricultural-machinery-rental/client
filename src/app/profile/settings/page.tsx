import { Metadata } from 'next';

import { ProfileSettings } from '@/widgets/user/Settings';

export const metadata: Metadata = {
  title: 'Settings',
};

const Settings = () => {
  return <ProfileSettings />;
};

export default Settings;
