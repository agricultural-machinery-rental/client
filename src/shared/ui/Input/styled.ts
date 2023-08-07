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
    color: blue; // TODO цвет взят условный, поправить, когда цвета будут готовы
  }
`;

export const StInput = styled.input`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colorsText.primary};
  font-size: 0.6rem;
  line-height: 1rem;
  height: 100%;
  outline: 0;
  padding: ${theme.padding.default};
  width: 100%;
`;

export const StLabel = styled.label<TLabel>`
  position: absolute;
  pointer-events: none;
  top: ${({ $inputValue }) => ($inputValue ? '0' : '50%')};
  transform: ${({ $inputValue }) =>
    $inputValue ? 'translate(0, 2px) scale(0.8)' : 'translate(0, -50%) scale(1)'};
  color: ${({ $inputValue }) =>
    $inputValue
      ? 'blue'
      : 'black'}; // TODO цвета взяты условные, поправить, когда цвета будут готовы
  transition: 200ms 0ms;
  transform-origin: top left;
  left: 16px;
  font-size: 0.6rem;
  line-height: 24px;
`;
