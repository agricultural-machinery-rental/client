'use client';
import { Metadata } from 'next';
import React from 'react';

import { Info } from '@/widgets/company/Info';

import { Breadcrumbs } from '@/features/Breadcrumbs';

export const metadata: Metadata = {
  title: 'О компании',
};

const breadcrumbs = [
  { text: 'Главная', url: '/' },
  { text: 'О компании', url: '/about' },
];

const About = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Info />
    </>
  );
};
export default About;
