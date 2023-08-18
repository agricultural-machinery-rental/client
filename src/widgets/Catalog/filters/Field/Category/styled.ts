import Link from 'next/link';
import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StNextLinkCategory = styled(Link)`
  font-size: 0.66rem;
  color: ${theme.colorsText.primary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s linear;

  &&:hover {
    color: ${theme.colorsText.alternate};
  }
`;
