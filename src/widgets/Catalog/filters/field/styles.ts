import { styled } from 'styled-components';

export const WrapFiltersField = styled.div`
  position: relative;
  width: 252px;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.625);
`;
export const Header = styled.div`
  cursor: pointer;
  & h5 {
    font-size: 0.75rem;
  }
  & :hover {
    opacity: 0.75;
  }
`;
export const ExpandIcon = styled.div<{ down: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  transform: rotate(${props => (props.down ? 0 : '180deg')});
`;
