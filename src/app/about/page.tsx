'use client';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Info } from '@/widgets/company/Info';

import { Breadcrumbs } from '@/features/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'О компании',
};

const About = () => {
  const router = useRouter();

  const goToNews = () => {
    router.push('/about/news');
  };

  const breadcrumbs = [
    { text: 'Главная', url: '/' },
    { text: 'О компании', url: '/about' },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Info />

      {/* Используем функцию goToNews для кнопки */}
      <button onClick={goToNews}>Перейти к новостям</button>
    </>
  );
};
export default About;
