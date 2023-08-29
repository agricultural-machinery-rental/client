import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';
import { type TButton } from '@/shared/ui/Button';

export const StButtonIcon = styled.button<TButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  background-color: ${theme.colors.bgBtnFirst};
  height: 40px;
  width: 40px;
  border-radius: 50%;

  &:hover {
    background: ${theme.colors.bgBtnHover};
    box-shadow: inset 0 0 2px ${theme.colors.borderFirst};
  }
`;
