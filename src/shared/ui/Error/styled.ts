import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';
import { zindex } from '@/shared/styles/zindex';

export const StError = styled.div`
  position: absolute;
  max-width: 100%;
  color: ${theme.colorsText.error};
  font-size: 0.5rem;
  line-height: 0.66rem;
  padding: 16px;
  background-color: ${theme.colors.bgElPrimary};
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 ${theme.colors.boxShadow};
  left: 5px; // TODO Временный стиль, обговорить с дизайнерами
  top: 70%; // Временный стиль
  z-index: ${zindex.tooltip};
`;
