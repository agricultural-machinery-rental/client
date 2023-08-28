import { StaticImageData } from 'next/image';

import { catalogItemCategory } from '@/shared/catalog';

export type TCategoryItemContainer = {
  image: StaticImageData;
  title: string;
  category: keyof typeof catalogItemCategory;
};
