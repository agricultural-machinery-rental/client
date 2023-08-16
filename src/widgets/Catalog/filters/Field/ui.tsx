import { FC, useState } from 'react';

import ArrowDown from './assets/arrow-down.svg';
import { CategoryFieldContent } from './Category';
import { LocationFieldContent } from './Location';
import { StWrapFiltersField } from './shared';
import { StHeader, StHeaderName, StExpandIcon } from './styled';
import { TFiltersField } from './types';

export const FiltersField: FC<TFiltersField> = props => {
  const { id, name } = props;
  const [expanded, setExpand] = useState(id === 'category');

  const content = () => {
    switch (id) {
      case 'category':
        return <CategoryFieldContent />;
      case 'location':
        return <LocationFieldContent />;
      case 'price':
        return <></>;
      case 'mark':
        return <></>;
      case 'model':
        return <></>;
      case 'purpose':
        return <></>;
      case 'condition':
        return <></>;
    }
  };
  return (
    <StWrapFiltersField>
      <StHeader onClick={() => setExpand(!expanded)}>
        <StHeaderName $expanded={+expanded}>{name}</StHeaderName>
        <StExpandIcon $expanded={+expanded}>
          <ArrowDown />
        </StExpandIcon>
      </StHeader>
      {expanded ? content() : ''}
    </StWrapFiltersField>
  );
};
