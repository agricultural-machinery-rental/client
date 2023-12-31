import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';
import { zindex } from '@/shared/styles/zindex';

export const StModalBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${theme.colors.modalBackground};
  z-index: ${zindex.modal};
`;

export const StModalWindow = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.bgElPrimary};
  margin: auto;
  max-height: 90vh;
  overflow: auto;
`;
