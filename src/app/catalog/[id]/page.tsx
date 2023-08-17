import { Metadata } from 'next';

import { ProductCard } from '@/widgets/ProductCard';

import { type TDynamicRoute } from '@/shared/types';

export const metadata: Metadata = {
  title: 'Categories',
};

const SomeTractor: TDynamicRoute<'id'> = ({ params }) => {
  const { id } = params;
  console.log(id);
  return <ProductCard />;
};

export default SomeTractor;
