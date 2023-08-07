'use client';
import { useEffect } from 'react';
import { Metadata } from 'next';
import { Info } from '@/widgets/company/Info';
import { Breadcrumbs } from '@/features/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '@/features/Breadcrumbs/BreadcrumbItem';
import { BreadcrumbManager } from '@/features/Breadcrumbs/BreadcrumbManager';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'О компании',
};
export enum MainPageAnchors {
  catalog = 'news',
}
export const HeaderNavItems: { title: string; link: MainPageAnchors }[] = [
  {
    title: 'новости',
    link: MainPageAnchors.catalog,
  },
];

const About = () => {
  const router = useRouter();

  const goToNews = () => {
    router.push('/about/news');
  };

  return (
    <>
      <BreadcrumbManager />
      <Info />
    </>
  );
};
export default About;
