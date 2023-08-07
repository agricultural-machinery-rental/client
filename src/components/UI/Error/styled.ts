import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StError = styled.div`
  position: absolute;
  max-width: 100%;
  color: ${theme.colorsText.error};
  font-size: 0.5rem;
  line-height: 1.3;
  padding: 16px;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 1px black; // TODO Временный стиль, обговорить с дизайнерами
  left: 5px; // Временный стиль
  top: 70%; // Временный стиль
`;
