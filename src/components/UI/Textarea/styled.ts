import styled from 'styled-components';
import { type TTextareaStyled, type TLabelProps } from './';

export const StTextareaContainer = styled.div`
  width: 100%;
  position: relative;

  &:focus-within label {
    transform: translate(0, 2px) scale(0.8);
    color: blue; // TODO цвет взят условный, поправить, когда цвета будут готовы
  }
`;

export const StTextarea = styled.textarea<TTextareaStyled>`
  padding: 16px 8px; // TODO: Взял из UI Kit для Input
  border: 1px solid #000; // TODO: Цвет написал тут, позже вынесу в константы, когда закроется PR по UI
  border-radius: 8px;
  resize: ${({ $resize }) => ($resize ? 'vertical' : 'none')};

  height: 112px;
  width: 100%;
`;

export const StLabel = styled.label<TLabelProps>`
  position: absolute;
  pointer-events: none;
  transform: ${({ $textareaValue }) =>
    $textareaValue ? 'translate(0, 2px) scale(0.8)' : 'translate(0, 14px) scale(1)'};
  color: ${({ $textareaValue }) =>
    $textareaValue
      ? 'blue'
      : 'black'}; // TODO цвета взяты условные, поправить, когда цвета будут готовы
  transition: 200ms 0ms;
  transform-origin: top left;
  left: 16px;
  font-size: 0.6rem;
  line-height: 24px;
`;
