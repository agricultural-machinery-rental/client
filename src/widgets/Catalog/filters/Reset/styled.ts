import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const ResetButton = styled.button`
  padding: 0.25rem 1rem;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.colorsText.alternate};
  background-color: transparent;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.borderSecond};
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    background-color: ${theme.colors.bgBtnDisabled};
    border: none;
    color: ${theme.colorsText.disabled};
    pointer-events: none;
  }
  &:active {
    box-shadow: 0px 4px 4px 0px ${theme.colors.boxShadow} inset;
    background-color: ${theme.colors.bgBtnSecond};
  }
`;
