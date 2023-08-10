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
  right: -93px;
`;

export const StName = styled(StTextBox)`
  display: inline;
  white-space: nowrap;
  color: ${theme.colorsText.primary};
`;
