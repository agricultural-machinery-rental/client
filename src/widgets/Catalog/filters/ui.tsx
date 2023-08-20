import { priceRange } from '@/shared/catalog';
import { useCatalogFilters } from '@/shared/model/filterContext';

import { ResetField } from './Field/Reset/ui';
import { FiltersField } from './Field/ui';
import { filters } from './filters';
import { StWrapFilters } from './styled';

export const Filters = () => {
  const { setPriceRange } = useCatalogFilters();
  const resetFilters = () => {
    if (setPriceRange) setPriceRange({ min: priceRange.min, max: priceRange.max });
  };

  return (
    <StWrapFilters>
      <ul>
        {Object.entries(filters).map(([key, data]) => {
          return (
            <li key={key}>
              <FiltersField id={key} name={data.name} />
            </li>
          );
        })}
        <li>
          <ResetField callback={resetFilters} />
        </li>
      </ul>
    </StWrapFilters>
  );
};
