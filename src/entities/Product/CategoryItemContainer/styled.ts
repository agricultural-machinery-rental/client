import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StCategoryItem = styled.li`
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const StCategoryTitleWrapper = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StCategoryItemTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1em;
  overflow: hidden;
  padding: ${theme.padding.default};
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 700;
`;
