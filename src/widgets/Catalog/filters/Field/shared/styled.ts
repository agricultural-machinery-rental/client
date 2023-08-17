import Link from 'next/link';
import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StWrapFiltersField = styled.div`
  position: relative;
  width: 252px;
  background-color: ${theme.colors.primary};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.625);
`;

export const StNextLinkAccend = styled(Link)`
  font-size: 0.66rem;
  color: ${theme.colorsText.primary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s linear;

  &&:hover {
    color: ${theme.colorsText.alternate};
  }
`;
