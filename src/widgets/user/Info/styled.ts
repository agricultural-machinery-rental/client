import { styled } from 'styled-components';

import { StFlex, StNextLink, StTextBox } from '@/shared/styles/global';

export const StContainer = styled(StFlex)`
  position: relative;
  width: 346px;
  margin: 0 auto;
`;

export const StIcon = styled(StNextLink)`
  position: absolute;
  right: -117px;
`;

export const StName = styled(StTextBox)`
  display: inline;
  white-space: nowrap;
`;
