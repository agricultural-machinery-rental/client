import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StCategoryItem = styled.li`
  border-radius: ${theme.borderRadius.round};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
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
  font-size: 1em;
  overflow: hidden;
  padding: ${theme.padding.default};
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 700;
`;
