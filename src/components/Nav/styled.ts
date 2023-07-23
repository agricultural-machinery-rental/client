import { styled } from 'styled-components';
import { StNextLink, StFlex } from '@/styles/global';
import { COLORS } from '@/styles/colors-const';

export const StNav = styled(StFlex)`
  white-space: nowrap;
`;

export const StNavLink = styled(StNextLink)`
  color: ${COLORS.COLOR_ELEMENT_PRIMARY};
`;
