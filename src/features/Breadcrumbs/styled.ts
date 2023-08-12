import { styled } from 'styled-components';

import { StNextLink, StContainer } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StBreadcrumbsItemWrap = styled(StContainer)`
  display: flex;
  font-size: 0.66rem;
  margin: 32px auto 0;
  align-items: center;
  color: ${theme.colors.bgSecondary};
`;
export const StBreadcrumbsItem = styled.p`
  margin-right: 16px;
`;

export const StBreadcrumbsLink = styled(StNextLink)`
  font-size: 0.66rem;
  margin-right: 16px;
`;
