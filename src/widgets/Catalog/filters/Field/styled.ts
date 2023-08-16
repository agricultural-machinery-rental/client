import { styled } from 'styled-components';

export const StHeader = styled.div`
  cursor: pointer;
  &h5 {
    font-size: 0.75rem;
  }
  &:hover {
    opacity: 0.75;
  }
`;
export const StHeaderName = styled.h5<{ $expanded: number }>`
  font-size: 0.75rem;
  margin-left: ${({ $expanded }) => ($expanded ? '1rem' : 0)};
`;
export const StExpandIcon = styled.div<{ $expanded: number }>`
  position: absolute;
  top: 1rem;
  left: ${({ $expanded }) => ($expanded ? '0.5rem' : 'auto')};
  right: ${({ $expanded }) => ($expanded ? 'auto' : '1rem')};
  width: 1rem;
  height: 1rem;
  transform: rotate(${({ $expanded }) => ($expanded ? '90deg' : 0)});
`;
