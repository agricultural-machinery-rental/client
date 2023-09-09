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
    background-color: ${theme.colors.bgElPrimary};
    transform: scale(1.3);
    box-shadow: 0px 16px 16px 0px ${theme.colors.boxShadow};
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
