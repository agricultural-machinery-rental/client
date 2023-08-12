import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StDateRangeWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;

  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 0;
  }

  input {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.borderFirst};
    color: ${theme.colorsText.primary};
    font-size: 1em;
    line-height: ${theme.sizesHeight.dateRange};
    height: ${theme.sizesHeight.dateRange};
    outline: 0;
    padding: ${theme.padding.default};
    width: ${theme.sizesWidth.input};
  }
`;
