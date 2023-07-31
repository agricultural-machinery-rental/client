import styled from 'styled-components';

export const StCheckboxWrapper = styled.div`
  margin: 24px 24px 24px 32px;
`;

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
  }
`;
