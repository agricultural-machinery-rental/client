import { FC, useState } from 'react';

import ArrowDown from './assets/arrow-down.svg';
import { StWrapFiltersField, StHeader, StHeaderName, StExpandIcon } from './styled';
import { TFiltersField } from './types';

export const FiltersField: FC<TFiltersField> = props => {
  const [epanded, setExpand] = useState(false);
  const { name } = props;
  return (
    <StWrapFiltersField>
      <StHeader onClick={() => setExpand(!epanded)}>
        <StHeaderName down={!epanded}>{name}</StHeaderName>
        <StExpandIcon down={!epanded}>
          <ArrowDown />
        </StExpandIcon>
      </StHeader>
    </StWrapFiltersField>
  );
};
