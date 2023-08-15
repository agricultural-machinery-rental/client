import { FiltersField } from './field/field';
import { filters } from './filters';
import { ResetField } from './reset/ui';
import { WrapFilters } from './styles';

export const Filters = () => {
  const resetFilters = () => {
    console.log('Reset filters');
  };

  return (
    <WrapFilters>
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
    </WrapFilters>
  );
};
