import { styled } from 'styled-components';

import { StTextBox } from '@/shared/styles/global';

export const StContainer = styled.div`
  width: 346px;
  margin: 196px 80px 136px;
`;

export const StTopTextBox = styled.div`
  margin: 0 0 128px;

  ${StTextBox} {
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
  }
`;
