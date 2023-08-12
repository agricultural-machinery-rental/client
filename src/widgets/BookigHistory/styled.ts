import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StGridHead = styled.div`
  font-weight: 700;
`;

export const StGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(30px, max-content);
  gap: 25px 0;

  & > div {
    padding: 0 32px 0 0;
    font-size: 0.66rem;
    line-height: 1rem;
    color: ${theme.colorsText.primary};
    border-bottom: 1px solid ${theme.colors.bgSecondary};
  }

  & > div:nth-child(4n) {
    padding: 0;
  }

  & > ${StGridHead} {
    padding-bottom: 14px;
    border: none;
  }
`;
