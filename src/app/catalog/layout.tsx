import { Metadata } from 'next';

import { TLayout } from '@/shared/model';
import { StContainer } from '@/shared/styles/global';

export const metadata: Metadata = {
  title: 'Catalog',
};

const CatalogLayout: TLayout = ({ children }) => {
  return <StContainer>{children}</StContainer>;
};

export default CatalogLayout;
