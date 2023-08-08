import { styled } from 'styled-components';

import { StFlex } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { zindex } from '@/shared/styles/zindex';

export const StHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.bgHeader};
  color: ${theme.colorsText.secondary};
  align-items: center;
  font-size: 0.6rem;
  z-index: ${zindex.header};
`;

export const StMenu = styled(StFlex)`
  flex-grow: 1;
  margin: 0 8px;
`;
