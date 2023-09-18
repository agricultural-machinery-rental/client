import { Metadata } from 'next';

import type { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Settings',
};

const SettingsLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default SettingsLayout;
