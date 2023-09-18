import { ProductCard } from '@/widgets/ProductCard';

import { machineriesAPI } from '@/shared/api';

const SomeTractor = async ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);

  const machinery = await machineriesAPI.getMachinery(id);

  return <ProductCard itemData={machinery.data} />;
};

export default SomeTractor;
