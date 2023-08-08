import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StModalBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${theme.colors.modalBackground};
`;

export const StModalWindow = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  margin: auto;
`;