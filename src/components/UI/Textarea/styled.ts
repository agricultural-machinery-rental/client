import styled from 'styled-components';
import { TTextareaStyled } from './';
import { theme } from '@/styles/theme';

export const StTextarea = styled.textarea<TTextareaStyled>`
  padding: 16px 8px; // TODO: Взял из UI Kit для Input
  border: 1px solid #000; // TODO: Цвет написал тут, позже вынесу в константы, когда закроется PR по UI
  border-radius: 8px;
  resize: ${({ $resize }) => ($resize ? 'vertical' : 'none')};

  height: 112px;
  width: 100%;
`;

export const StError = styled.div`
  color: ${theme.colorsText.error};
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.2;
`;
