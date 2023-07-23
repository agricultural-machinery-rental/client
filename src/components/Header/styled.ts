import { styled } from 'styled-components';
import { StFlex } from '@/styles/global';

export const StHeader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const StMenu = styled(StFlex)`
  flex-grow: 1;
  margin: 0 8px;
`;

export const StLocationLink = styled(StFlex)`
  cursor: pointer;
`;
