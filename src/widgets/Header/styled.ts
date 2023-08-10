import { styled } from 'styled-components';

import { StFlex, StNextLink, StNextSpan } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { zindex } from '@/shared/styles/zindex';

export const StHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.bgSecondary};
  color: ${theme.colorsText.secondary};
  align-items: center;
  z-index: ${zindex.header};
`;

export const StMenu = styled(StFlex)`
  flex-grow: 1;
  margin: 0 8px;
`;

export const StPhoneLink = styled(StNextLink)`
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

  &&:hover:after {
    transform: scaleX(1);
  }
`;

export const StSpan = styled(StNextSpan)`
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

  &&:hover:after {
    transform: scaleX(1);
  }
`;
