import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StInput = styled.input`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colorsText.primary};
  font-size: 16px;
  line-height: 24px;
  height: ${theme.sizesHeight.input};
  outline: 0;
  padding: ${theme.padding.default};
  width: ${theme.sizesWidth.input};
`;

export const StError = styled.div`
  color: ${theme.colorsText.error};
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.2;
`;
