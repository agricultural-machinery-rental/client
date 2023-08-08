import { Metadata } from 'next';

import { Breadcrumbs } from '@/features/Breadcrumbs';
export const metadata: Metadata = {
  title: 'Catalog',
};

const breadcrumbs = [
  { text: 'Главная', url: '/' },
  { text: 'Каталог', url: '/catalog' },
];

const Catalog = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};

export default Catalog;
