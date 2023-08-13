import { FiltersField } from './field/field';
import { filters } from './filters';
import { WrapFilters } from './styles';

export const Filters = () => {
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
      </ul>
    </WrapFilters>
  );
};
