import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'О компании',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
