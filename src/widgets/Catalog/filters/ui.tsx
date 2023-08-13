'use client';
import styled from 'styled-components';
import FiltersField from './field';
import filters from './filters';

type Keys = keyof typeof filters;

const Filters = () => {
  return (
    <WrapFilters>
      <ul>
        {Object.keys(filters).map(key => {
          const { name } = filters[key as Keys];
          return (
            <li key={key}>
              <FiltersField id={key} name={name} />
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

export default Filters;
