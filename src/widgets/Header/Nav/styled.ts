import { styled } from 'styled-components';

import { COLORS } from '@/shared/styles/colors-const';
import { StNextLink, StFlex } from '@/shared/styles/global';

export const StNav = styled(StFlex)`
  white-space: nowrap;
`;

export const StNavLink = styled(StNextLink)`
  color: ${COLORS.COLOR_ELEMENT_PRIMARY};
`;
