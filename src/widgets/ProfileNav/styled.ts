import { styled } from 'styled-components';

import { StFlex } from '@/shared/styles/global';

export const StProfileNav = styled(StFlex)`
  flex-direction: column;
  min-width: 252px;
  gap: 8px;

  & .first {
    border-radius: 0px 10px 0px 0px;
  }

  & .last {
    border-radius: 0px 0px 10px 0px;
  }
`;
