import { Metadata } from 'next';

import { Breadcrumbs } from '@/features/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Catalog',
};

const Catalog = () => {
  return (
    <>
      <Breadcrumbs />
    </>
  );
};

export default Catalog;
