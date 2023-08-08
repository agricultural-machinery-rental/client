import { styled } from 'styled-components';

import { StNextLink, StContainer } from '@/shared/styles/global';

export const StBreadcrumbsItemWrap = styled(StContainer)`
  display: flex;
  font-size: 0.5rem;
  margin: 32px auto 0;
  align-items: center;
`;
export const StBreadcrumbsItem = styled.p`
  display: flex;
  padding-right: 16px;
`;

export const StBreadcrumbsLink = styled(StNextLink)`
  font-size: 0.5rem;
  padding-right: 16px;
`;
