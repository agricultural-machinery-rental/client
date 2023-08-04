import styled from 'styled-components';
import { StFlex } from '@/styles/global';
import type { TAsterisk } from '../../typing';
import { theme } from '@/styles/theme';

export const StFieldWrapper = styled(StFlex)`
  position: relative;
  width: 346px;
  flex-direction: column;
  gap: 8px;
`;

export const StRelativeBox = styled.div`
  position: relative;
`;

export const StAsterick = styled.div<TAsterisk>`
  position: absolute;
  width: 10px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  left: -17px;
  color: ${theme.colors.error};
  visibility: ${({ visibility }) => visibility && visibility};
`;
