import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

import { type TTextareaStyledComponent, type TLabel } from './typing';

export const StTextareaContainer = styled.div`
  width: 100%;
  position: relative;

  &:focus-within label {
    transform: translate(0, 2px) scale(0.8);
    color: ${theme.colorsText.edit};
  }
`;

export const StTextarea = styled.textarea<TTextareaStyledComponent>`
  padding: 16px 8px; // TODO: Взял из UI Kit для Input
  border: 1px solid #000; // TODO: Цвет написал тут, позже вынесу в константы, когда закроется PR по UI
  border-radius: 8px;
  resize: ${({ $resize }) => ($resize ? 'vertical' : 'none')};

  height: 112px;
  width: 100%;
`;

export const StLabel = styled.label<TLabel>`
  position: absolute;
  pointer-events: none;
  transform: ${({ $textareaValue }) =>
    $textareaValue ? 'translate(0, 2px) scale(0.8)' : 'translate(0, 14px) scale(1)'};
  color: ${({ $textareaValue }) =>
    $textareaValue ? `${theme.colorsText.edit}` : `${theme.colorsText.primary}`};
  transition: 200ms 0ms;
  transform-origin: top left;
  left: 16px;
  font-size: 0.6rem;
  line-height: 24px;
`;
