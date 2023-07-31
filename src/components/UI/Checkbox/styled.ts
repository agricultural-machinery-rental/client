import styled from 'styled-components';

export const StCheckboxContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;

  > input {
    position: absolute;
    width: 24px;
    height: 24px;
    margin: auto;
    opacity: 0;
    cursor: pointer;
  }
`;

export const StLabel = styled.label`
  cursor: pointer;
`;
