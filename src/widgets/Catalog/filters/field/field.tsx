import { FC, useState } from 'react';
import ArrowDown from '../assets/arrow-down.svg';
import { WrapFiltersField, Header, ExpandIcon } from './styles';
import { TFiltersField } from './types';

export const FiltersField: FC<TFiltersField> = props => {
  const [epanded, setExpand] = useState(false);
  const { name } = props;
  return (
    <WrapFiltersField>
      <Header onClick={() => setExpand(!epanded)}>
        <h5>{name}</h5>
        <ExpandIcon down={!epanded}>
          <ArrowDown />
        </ExpandIcon>
      </Header>
    </WrapFiltersField>
  );
};
