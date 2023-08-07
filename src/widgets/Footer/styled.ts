import { styled } from 'styled-components';

import { COLORS } from '@/shared/styles/colors-const';
import { StContainer, StFlex, StTextBox, StNextLink } from '@/shared/styles/global';

export const StFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.BACKGROUND_COLOR_PRIMARY};
`;

export const StFooterContainer = styled(StContainer)`
  padding: 80px 0 40px;
`;

export const StFooterColumn = styled(StFlex)`
  padding: 8px 8px 24px 16px;
`;

export const StFooterColumnTitle = styled(StTextBox)`
  margin: 0 0 8px;
`;

export const StFooterNetworksWrapper = styled(StFlex)`
  padding: 8px 0;
`;

export const StFooterLink = styled(StNextLink)`
  color: ${COLORS.COLOR_ELEMENT_PRIMARY};
`;
