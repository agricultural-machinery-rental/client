import { styled } from 'styled-components';

import { StContainer, StFlex, StTextBox, StNextLink } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StFooter = styled.footer`
  width: 100%;
  background-color: ${theme.colors.bgSecondary};
`;

export const StFooterContainer = styled(StContainer)`
  padding: 40px 0 80px;
  color: ${theme.colors.primary};
`;

export const StFooterColumn = styled(StFlex)`
  padding: 0 0 20px 0;
`;

export const StFooterLink = styled(StNextLink)`
  color: ${theme.colors.primary};
  font-size: 0.6rem;
`;

export const StFooterCaption = styled(StTextBox)`
  align-self: end;
`;

export const StFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 6px;
  font-size: 0.6rem;
`;
