import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StContainer = styled.div`
  position: relative;
`;

export const StIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${theme.colors.black};
  }
`;
