import { Metadata } from 'next';

import { InfoEdit } from '@/widgets/user/InfoEdit';

export const metadata: Metadata = {
  title: 'Profile Edit',
};

const Edit = () => {
  return <InfoEdit />;
};

export default Edit;
