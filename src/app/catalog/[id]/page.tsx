import { Metadata } from 'next';

import { ProductCard } from '@/widgets/ProductCard';

import { temporatyItem } from '@/shared/catalog';
import { type TDynamicRoute } from '@/shared/types';

export const metadata: Metadata = {
  title: 'Categories',
};

const SomeTractor: TDynamicRoute<'id'> = ({ params }) => {
  const { id } = params;
  console.log(id);
  //const itemData = fetchProductDataById(id);

  return <ProductCard itemData={temporatyItem} />;
};

export default SomeTractor;
