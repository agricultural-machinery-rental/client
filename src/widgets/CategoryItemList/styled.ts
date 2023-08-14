import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StSection = styled.section`
  padding: 80px 0 48px;
  margin-bottom: 126px;
  background: ${theme.colors.bgOpacity3};
`;

export const StCategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  gap: 48px 32px;
`;
