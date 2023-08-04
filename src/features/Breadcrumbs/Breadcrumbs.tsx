'use client';
import { Metadata } from 'next/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbsProps {
  metadata: Metadata;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ metadata }) => {
  const title = metadata.title;

  return (
    <>
      <Link href='/'>Главная</Link> &gt; {title}
    </>
  );
};
