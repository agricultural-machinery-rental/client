import { useSearchParams } from 'next/navigation';

import { catalogItemCategory } from '@/shared/catalog';

export const useCategoryByUrl = (): keyof typeof catalogItemCategory | null => {
  const searchParams = useSearchParams();
  const hrefSearchParam = searchParams.toString().split('=')[0];
  return hrefSearchParam in catalogItemCategory
    ? (hrefSearchParam as keyof typeof catalogItemCategory)
    : null;
};
