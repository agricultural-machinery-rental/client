'use client';

import { Breadcrumbs } from '@/features/Breadcrumbs/Breadcrumbs';

// import { BreadcrumbItem } from '@/features/Breadcrumbs/BreadcrumbItem';
// import Link from 'next/link';
// import { BreadcrumbManager } from '@/features/Breadcrumbs/BreadcrumbManager';

const Abouts = () => {
  const breadcrumbs = [
    { text: 'Главная', url: '/' },
    { text: 'О компании', url: '/about' },
    { text: 'Новости', url: '/about/news' },
  ];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
};
export default Abouts;
