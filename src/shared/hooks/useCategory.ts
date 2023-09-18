import { usePathname } from 'next/navigation';

import { catalogItemCategory } from '@/shared/catalog';

export const useCategoryByUrl = (): keyof typeof catalogItemCategory | null => {
  const searchParams = usePathname();
  const hrefSearchParams = searchParams.toString().split('/');
  const hrefSearchParam = hrefSearchParams[hrefSearchParams.length - 1];
  return hrefSearchParam in catalogItemCategory
    ? (hrefSearchParam as keyof typeof catalogItemCategory)
    : null;
};
