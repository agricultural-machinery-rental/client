import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StInput = styled.input`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colorsText.primary};
  font-size: 0.6rem;
  line-height: 24px;
  height: ${theme.sizesHeight.input};
  outline: 0;
  padding: ${theme.padding.default};
  width: 100%;
`;
