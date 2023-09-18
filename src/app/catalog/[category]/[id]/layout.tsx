import { Metadata } from 'next';

import { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Categories',
};

const SomeTractorLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default SomeTractorLayout;
