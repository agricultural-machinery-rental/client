import styled from 'styled-components';
import { type TButton } from './typing';
import { theme } from '@/styles/theme';

export const StButton = styled.button<TButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  color: ${theme.colorsText.primary};
  background-color: ${theme.colors.btnFirst};
  line-height: ${theme.sizesHeight.button};
  width: ${theme.sizesWidth.button};
  border-radius: ${theme.borderRadius.round};
  border: none;

  &:hover {
    background: ${theme.colors.btnSecond};
    box-shadow: inset 0 0 2px ${theme.colors.btnBorder};
  }

  &:disabled {
    background-color: ${theme.colors.btnThird};
    color: ${theme.colorsText.disabled};
    pointer-events: none;
  }
`;
