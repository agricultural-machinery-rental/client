import { objectEntries } from '@/shared/lib';
import type { TPriceFilter, TFilters } from '@/shared/model/filterContext';
import { TMachineryDto } from '@/shared/model/typing';

export const getFilteredItemsData = (
  filters: TFilters,
  machineries: TMachineryDto[] | null,
): TMachineryDto[] => {
  // console.log('original', machineries);
  const array = machineries?.filter(item =>
    objectEntries(filters).every(([key, value]) => {
      switch (key) {
        // case 'category':
        //   return !value || item.machinery.category === value;
        case 'location':
          return true;
        case 'price': {
          if (!value || !item.price_per_shift) return true;
          const priceRange = value as TPriceFilter;
          return (
            Number(item.price_per_shift) >= priceRange.min &&
            Number(item.price_per_shift) <= priceRange.max
          );
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
  // console.log('filtered', array);
  return array || [];
};
