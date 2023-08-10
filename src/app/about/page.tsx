'use client';

import { Metadata } from 'next';
import React from 'react';

import { Info } from '@/widgets/company/Info';

import { Breadcrumbs } from '@/features/Breadcrumbs';

export const metadata: Metadata = {
  title: 'О компании',
};

const About = () => {
  return (
    <>
      <Breadcrumbs />
      <Info />
    </>
  );
};
export default About;
