'use client';

import { Metadata } from 'next';
import React from 'react';

import { Info } from '@/widgets/company/Info';

export const metadata: Metadata = {
  title: 'О компании',
};

const About = () => {
  return (
    <>
      <Info />
    </>
  );
};
export default About;
