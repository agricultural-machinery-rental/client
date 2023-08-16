import Link from 'next/link';
import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StWrapLocation = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

export const StNextLinkLocation = styled(Link)`
  font-size: 0.66rem;
  color: ${theme.colorsText.primary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s linear;

  &&:hover {
    color: ${theme.colorsText.alternate};
  }
`;
