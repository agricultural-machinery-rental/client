import { FiltersField } from './Field/ui';
import { filters } from './filters';
import { StWrapFilters } from './styled';

export const Filters = () => {
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
      </ul>
    </StWrapFilters>
  );
};
