import styled from 'styled-components';
import { StFlex } from '@/styles/global';
import { TAsterisk } from './';
import { theme } from '@/styles/theme';

export const StFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StFieldWrapper = styled(StFlex)`
  position: relative;
  width: 346px;
  height: 80px;
  flex-direction: column;
  gap: 8px;
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

export const StRelativeBox = styled.div`
  position: relative;
`;
