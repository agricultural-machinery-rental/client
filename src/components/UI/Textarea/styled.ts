import { TTextareaStyled } from './typing';
import styled from 'styled-components';

export const StTextarea = styled.textarea<TTextareaStyled>`
  padding: 16px 8px; // TODO: Взял из UI Kit для Input
  border: 1px solid #000; // TODO: Цвет написал тут, позже вынесу в константы, когда закроется PR по UI
  border-radius: 8px;
  resize: ${({ $resize }) => ($resize ? 'vertical' : 'none')};

  height: 112px;
  width: 100%;
`;
