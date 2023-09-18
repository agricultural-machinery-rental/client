import { Metadata } from 'next';

import { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Categories',
};

const CatalogCategoryLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default CatalogCategoryLayout;
