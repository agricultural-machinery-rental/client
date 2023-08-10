import { styled } from 'styled-components';

import { StNextLink, StFlex } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StNav = styled(StFlex)`
  white-space: nowrap;
`;

export const StNavLink = styled(StNextLink)`
  position: relative;
  color: ${theme.colorsText.secondary};
  padding: 0 8px;

  &:after {
    position: absolute;
    transform: scaleX(0);
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    top: 100%;
    background: ${theme.colorsText.secondary};
    transition: transform 250ms ease-in-out;
    left: 0;
  }

  &&:hover {
    text-decoration: none;
  }

  &&.active:after,
  &&:hover:after {
    transform: scaleX(1);
  }
`;
