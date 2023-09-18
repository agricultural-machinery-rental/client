import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

import { type TLabel } from './typing';

export const StInputContainer = styled.div`
  width: 100%;
  height: ${theme.sizesHeight.input};
  position: relative;

  &:focus-within label {
    top: 0;
    transform: translate(0, 2px) scale(0.8);
    color: ${theme.colorsText.edit};
  }
`;

export const StInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.borderFirst};
  color: ${theme.colorsText.primary};
  font-size: 0.6rem;
  line-height: 1rem;
  outline: 0;
  padding: ${theme.padding.input};

  &:focus {
    border: 1px solid ${theme.colors.borderThird};
  }
`;

export const StLabel = styled.label<TLabel>`
  position: absolute;
  pointer-events: none;
  top: ${({ $inputValue }) => ($inputValue ? '0' : '50%')};
  transform: ${({ $inputValue }) =>
    $inputValue ? 'translate(0, 2px) scale(0.8)' : 'translate(0, -50%) scale(1)'};
  color: ${({ $inputValue }) =>
    $inputValue ? `${theme.colorsText.edit}` : `${theme.colorsText.primary}`};
  transition: 200ms 0ms;
  transform-origin: top left;
  left: 16px;
  font-size: 0.6rem;
  line-height: 24px;
`;
