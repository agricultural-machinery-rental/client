import { Metadata } from 'next';
import React from 'react';

import { TLayout } from '@/shared/model';
import { StContainer } from '@/shared/styles/global';

export const metadata: Metadata = {
  title: 'Catalog',
};

const CatalogLayout: TLayout = ({ children }: { children: React.ReactNode }) => {
  return <StContainer>{children}</StContainer>;
};

export default CatalogLayout;
