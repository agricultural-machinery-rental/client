import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

import { type TButton } from './typing';

export const StButton = styled.button<TButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  color: ${props => {
    switch (props.$designType) {
      case 'secondary':
        return theme.colorsText.alternate;
      case 'primary':
      default:
        return theme.colorsText.secondary;
    }
  }};
  background-color: ${props => {
    switch (props.$designType) {
      case 'secondary':
        return theme.colors.bgBtnSecond;
      case 'primary':
      default:
        return theme.colors.bgBtnFirst;
    }
  }};
  height: ${theme.sizesHeight.button};
  width: ${theme.sizesWidth.button};
  border-radius: ${theme.borderRadius.round};
  border: ${props => {
    switch (props.$designType) {
      case 'secondary':
        return `1px solid ${theme.colors.borderSecond}`;
      case 'primary':
      default:
        return 'none';
    }
  }};

  /* TODO поправить кнопки в разных состояних, когда дизайнеры скорректируют */
  &:hover {
    background-color: ${theme.colors.bgBtnHover};
    border: none;
  }

  &:disabled {
    background-color: ${theme.colors.bgBtnDisabled};
    border: none;
    color: ${theme.colorsText.disabled};
    pointer-events: none;
  }

  &:active {
    box-shadow: 0px 4px 4px 0px ${theme.colors.boxShadow} inset;
    background-color: ${props => {
      switch (props.$designType) {
        case 'secondary':
          return theme.colors.bgBtnSecond;
        case 'primary':
        default:
          return theme.colors.bgBtnFirst;
      }
    }};
  }
`;
