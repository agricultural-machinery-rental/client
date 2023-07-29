import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StCategoryItem = styled.li`
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StCategoryItemImage = styled.div`
  aspect-ratio: 1;
  color: #fff;
  cursor: pointer;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.9;
  width: 100%;
`;

export const StCategoryItemTitle = styled.h4`
  display: flex;
  justify-content: center;
  font-family: Archivo;
  font-size: 1em;
  overflow: hidden;
  padding: ${theme.padding.default};
  text-overflow: ellipsis;
`;
