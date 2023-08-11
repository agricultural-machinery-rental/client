import { styled } from 'styled-components';

import { StFlex, StNextLink, StTextBox } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StContainer = styled(StFlex)`
  position: relative;
  width: 346px;
`;

export const StIcon = styled(StNextLink)`
  position: absolute;
  top: 4px;
  right: -117px;
`;

export const StNameWrapper = styled.div`
  width: 430px; /** Чтобы имя переносилось только если доходит до карандаша */
`;

export const StName = styled(StTextBox)`
  display: inline;
  color: ${theme.colorsText.primary};
`;
