import { FiltersField } from './Field/ui';
import { filters } from './filters';
import { ResetField } from './Reset/ui';
import { StWrapFilters } from './styled';

export const Filters = () => {
  const resetFilters = () => {
    console.log('Reset filters');
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
