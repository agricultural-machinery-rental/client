import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Profile Info',
};

export default function ProfileInfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
