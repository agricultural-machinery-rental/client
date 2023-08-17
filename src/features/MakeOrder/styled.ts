import { styled } from 'styled-components';

import { StHeading3 } from '@/shared/styles/global';

export const StContainer = styled.div`
  width: 534px;
  margin: 80px 96px 120px;
  & .fieldset {
    gap: 32px;
  }
`;

export const StFormWrapper = styled.div`
  margin: 0 94px;
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 56px;
`;

export const StButton = styled.div`
  margin-top: 80px;
`;
