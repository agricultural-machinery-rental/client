import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StCategoryItem = styled.li`
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bg};
`;

export const StCategoryItemImage = styled.div`
  aspect-ratio: 1;
  color: #fff;
  cursor: pointer;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.9;
  width: 252px;
  height: 168px;
  display: flex;
  justify-content: center;
`;

export const StCategoryTitleWrapper = styled.div`
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StCategoryItemTitle = styled.p`
  display: flex;
  justify-content: center;
  font-family: Archivo;
  font-size: 1em;
  overflow: hidden;
  padding: ${theme.padding.default};
  text-overflow: ellipsis;
  text-align: center;
`;
