import { styled } from 'styled-components';
import { FiltersField } from './field';
import { filters } from './filters';

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

const WrapFilters = styled.div`
  margin-right: 1.5rem;
  li {
    margin: 0.5rem 0;
  }
`;
