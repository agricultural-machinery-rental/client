import { styled } from 'styled-components';

import { StNextLink, StFlex } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StNav = styled(StFlex)`
  white-space: nowrap;
`;

export const StNavLink = styled(StNextLink)`
  color: ${theme.colorsText.secondary};
`;
