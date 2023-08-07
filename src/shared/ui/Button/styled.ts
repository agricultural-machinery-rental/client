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
      case 'primary':
        return theme.colorsText.secondary;
      case 'secondary':
        return theme.colorsText.alternate;
      default:
        return theme.colorsText.secondary;
    }
  }};
  background-color: ${props => {
    switch (props.$designType) {
      case 'primary':
        return theme.colors.bgBtnFirst;
      case 'secondary':
        return theme.colors.bgBtnSecond;
      default:
        return theme.colors.bgBtnFirst;
    }
  }};
  height: ${theme.sizesHeight.button};
  width: ${theme.sizesWidth.button};
  border-radius: ${theme.borderRadius.round};
  border: ${props => {
    switch (props.$designType) {
      case 'primary':
        return 'none';
      case 'secondary':
        return `1px solid ${theme.colors.borderSecond}`;
      default:
        return 'none';
    }
  }};

  /* TODO поправить кнопки в разных состояних, когда дизайнеры скорректируют */
  &:hover {
    background-color: ${props => {
      switch (props.$designType) {
        case 'primary':
          return theme.colors.bgBtnFirst;
        case 'secondary':
          return theme.colors.bgBtnSecond;
        default:
          return theme.colors.bgBtnFirst;
      }
    }};
    border: 2px solid ${theme.colors.borderFirst};
  }

  &:disabled {
    background-color: ${theme.colors.bgBtnThird};
    color: ${theme.colorsText.disabled};
    pointer-events: none;
  }
`;
