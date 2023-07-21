import styled from 'styled-components';
import { TButton } from './Button';

export const COLOR_ELEMENT_PRIMARY = '#fff';
export const COLOR_ELEMENT_SECONDARY = '#000';

export const StButton = styled.button<TButton>`
  background-color: ${({ $designType }) => {
    return $designType === 'primary' ? COLOR_ELEMENT_PRIMARY : COLOR_ELEMENT_SECONDARY;
  }};

  &:hover {
    background-color: ${({ $designType }) => {
      return $designType === 'primary' ? COLOR_ELEMENT_SECONDARY : COLOR_ELEMENT_PRIMARY;
    }};
  }
`;
