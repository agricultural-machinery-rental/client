import Link from 'next/link';
import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StNextLinkCategory = styled(Link)<{ $disabled: boolean }>`
  font-size: 0.66rem;
  color: ${({ $disabled }) => ($disabled ? theme.colorsText.alternate : theme.colorsText.primary)};
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'all')};
  transition: color 0.3s linear;

  &:hover {
    color: ${theme.colorsText.alternate};
  }
`;
