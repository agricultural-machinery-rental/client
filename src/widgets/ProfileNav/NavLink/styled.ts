import Link from 'next/link';
import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

import { TNavLinkStyle } from './typing';

export const StNavLink = styled(Link)<TNavLinkStyle>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 0 0 5px; // TODO отступ рандомный, пока кнопки реализованы без выхода за края контейнера
  background-color: ${theme.colors.bgElPrimary};
  border: ${props => `1px solid ${props.$active ? theme.colors.borderSecond : 'transparent'}`};
  font-size: 0.66rem;
  line-height: 1rem;
  font-weight: 700;
  color: ${props => (props.$active ? theme.colorsText.alternate : theme.colorsText.primary)};

  &:hover {
    border: 1px solid ${theme.colors.borderSecond};
    color: ${theme.colorsText.alternate};
  }
`;
