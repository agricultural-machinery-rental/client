import { styled } from 'styled-components';

import { StNextLink, StFlex, StyledLinkWithLine } from '@/shared/styles/global';

export const StNav = styled(StFlex)`
  white-space: nowrap;
`;

export const StNavLink = styled(StNextLink)`
  ${StyledLinkWithLine}
`;
