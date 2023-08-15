import { styled } from 'styled-components';

import { StFlex, StNextLink, StNextSpan, StyledLinkWithLine } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { zindex } from '@/shared/styles/zindex';

export const StHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  background-color: ${theme.colors.bgSecondary};
  color: ${theme.colorsText.secondary};
  z-index: ${zindex.header};
`;

export const StMenu = styled(StFlex)`
  flex-grow: 1;
  margin: 0 8px;
`;

export const StNextLinkStyled = styled(StNextLink)`
  ${StyledLinkWithLine}
`;

export const StSpan = styled(StNextSpan)`
  ${StyledLinkWithLine}
`;
