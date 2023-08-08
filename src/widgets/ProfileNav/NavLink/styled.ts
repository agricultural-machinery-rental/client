import Link from 'next/link';
import { styled } from 'styled-components';

export const StNavLink = styled(Link)`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 0 0 5px; // TODO отступ рандомный, пока кнопки реализованы без выхода за края контейнера
  background-color: #fafafa; // TODO взять цвет из theme
  border: 1px solid transparent;
  font-size: 0.66rem;
  line-height: 1rem;
  font-weight: 700;
  color: rgba(51, 51, 51, 1); // TODO взять цвет из theme

  &:hover {
    border: 1px solid rgba(255, 153, 0, 1); // TODO взять цвет из theme
    color: rgba(255, 153, 0, 1); // TODO взять цвет из theme
  }
`;
