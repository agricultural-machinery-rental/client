import { objectEntries } from '@/shared/lib';
import type { TPriceFilter, TFilters } from '@/shared/model/filterContext';

import { temporatyItemData } from './constants';
import { TCatalogItem } from './typing';

export const getFilteredItemData = (filters: TFilters): TCatalogItem[] => {
  return temporatyItemData.filter(item =>
    objectEntries(filters).every(([key, value]) => {
      switch (key) {
        case 'category':
          return !value || item.category === value;
        case 'location':
          return true;
        case 'price': {
          if (!value || !item.prices.perShift) return true;
          const priceRange = value as TPriceFilter;
          return item.prices.perShift >= priceRange.min && item.prices.perShift <= priceRange.max;
        }
        case 'mark':
          return true;
        case 'model':
          return true;
        case 'purpose':
          return true;
        case 'condition':
          return true;
        default:
          return true;
      }
    }),
  );
};
