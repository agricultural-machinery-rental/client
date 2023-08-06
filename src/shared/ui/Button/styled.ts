import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

import { type TButton } from './typing';

export const StButton = styled.button<TButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  color: ${theme.colorsText.primary};
  background-color: ${theme.colors.btnFirst};
  height: ${theme.sizesHeight.button};
  width: ${theme.sizesWidth.button};
  border-radius: ${theme.borderRadius.round};
  border: none;

  &:hover {
    background: ${theme.colors.btnSecond};
    box-shadow: inset 0 0 2px ${theme.colors.border};
  }

  &:disabled {
    background-color: ${theme.colors.btnThird};
    color: ${theme.colorsText.disabled};
    pointer-events: none;
  }
`;
