import { filterName } from '@/widgets/Catalog';

import { temporatyItemData } from './constants';

// import { TFilters } from '@/app/catalog'; // Want to break the shakles

export const getItemData = (
  filters: Record<string, null | string | Record<string, number>> = {},
) => {
  return temporatyItemData.filter(item =>
    Object.entries(filters).every(([key, value]) => {
      switch (key as keyof typeof filterName) {
        case 'category':
          return !value || item.category === value;
        case 'location':
          return true;
        case 'price': {
          if (!value || !item.prices.perShift) return true;
          const priceRange = value as Record<string, number>;
          return item.prices.perShift > priceRange.min && item.prices.perShift < priceRange.max;
        }
        case 'mark':
          return true;
        case 'model':
          return true;
        case 'purpose':
          return true;
        case 'condition':
          return true;
      }
    }),
  );
};
