import { Metadata } from 'next';

import type { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Profile Edit',
};

const EditLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default EditLayout;
