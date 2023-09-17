import { ProductCard } from '@/widgets/ProductCard';

import { API_ENDPOINTS, BASE_URL } from '@/shared/api/config';

const SomeTractor = async ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);

  const itemData = await fetch(`${BASE_URL}/${API_ENDPOINTS.machinery}/${id}`).then(data =>
    data.json(),
  );

  return <ProductCard itemData={itemData} />;
};

export default SomeTractor;
