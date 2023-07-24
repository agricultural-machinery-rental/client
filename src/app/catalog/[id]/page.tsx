import { TDynamicRoute } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories',
};

const SomeTractor: TDynamicRoute<'id'> = ({ params }) => {
  const { id } = params;
  return <h1>Categories {id}</h1>;
};

export default SomeTractor;
