import { objectEntries } from '@/shared/lib';
import { useCatalogFilters } from '@/shared/model/filterContext';

import { ResetField } from './Field/Reset/ui';
import { FiltersField } from './Field/ui';
import { filters } from './filters';
import { StWrapFilters } from './styled';

export const Filters = () => {
  const { resetFilters } = useCatalogFilters();

  return (
    <StWrapFilters>
      <ul>
        {objectEntries(filters).map(([key, data]) => {
          return (
            <li key={key}>
              <FiltersField id={key} name={data.name} />
            </li>
          );
        })}
        <li>
          <ResetField callback={resetFilters!} />
        </li>
      </ul>
    </StWrapFilters>
  );
};
