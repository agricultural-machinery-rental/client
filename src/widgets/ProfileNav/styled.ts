import { styled } from 'styled-components';

import { StFlex } from '@/shared/styles/global';

import { StNavLink } from './NavLink/styled';

export const StProfileNav = styled(StFlex)`
  flex-direction: column;
  width: 257px; // TODO обрезала ширину, пока кнопки не выходят за края
  gap: 8px;

  & ${StNavLink}:first-child {
    border-radius: 0px 10px 0px 0px;
  }

  & ${StNavLink}:last-child {
    border-radius: 0px 0px 10px 0px;
  }
`;
