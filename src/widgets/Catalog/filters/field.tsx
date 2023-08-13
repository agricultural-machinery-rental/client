import { FC, useState } from 'react';
import styled from 'styled-components';
import ArrowDown from './assets/arrow-down.svg';

type TFiltersField = {
  id: string;
  name: string;
};

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

const WrapFiltersField = styled.div`
  position: relative;
  width: 252px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.625);
`;
const Header = styled.div`
  cursor: pointer;
  h5 {
    font-size: 0.75rem;
  }
  :hover {
    opacity: 0.75;
  }
`;
const ExpandIcon = styled.div<{ down: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  transform: rotate(${props => (props.down ? 0 : '180deg')});
`;
