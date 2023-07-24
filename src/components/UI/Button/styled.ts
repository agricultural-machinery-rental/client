import styled from 'styled-components';
import { DesignType, type TButton } from './typing';
import { theme } from '@/styles/theme';

export const StButton = styled.button<TButton>`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid black;
  cursor: pointer;

  border-radius: ${({ shape }) =>
    shape === 'round' ? theme.borderRadius.round : theme.borderRadius.square};

  color: ${({ designType }) =>
    designType === 'primary' ? theme.colorsText.primary : theme.colorsText.secondary};

  background-color: ${({ designType }) =>
    designType === 'primary' ? theme.colors.primary : theme.colors.secondary};

  line-height: ${({ sizeType }) => {
    return sizeType === 'small'
      ? theme.sizesHeight.small
      : 'middle'
      ? theme.sizesHeight.medium
      : 'large'
      ? theme.sizesHeight.large
      : '';
  }};

  padding: ${({ sizeType }) => {
    return sizeType === 'small'
      ? theme.padding.small
      : 'middle'
      ? theme.padding.medium
      : 'large'
      ? theme.padding.large
      : '';
  }};

  &:hover {
    background: ${theme.colors.secondary};
  }
`;
