import { Metadata } from 'next';
import { Info } from '@/widgets/company/Info';
import { Breadcrumbs } from '@/features/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '@/features/Breadcrumbs/BreadcrumbItem';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'О компаниии',
};

const Abouts = () => {
  return <>{/* <Breadcrumbs metadata={metadata} /> */}</>;
};
export default Abouts;
