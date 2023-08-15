import { styled } from 'styled-components';

import { StHeading3, StTextBox } from '@/shared/styles/global';

export const StContainer = styled.div`
  width: 346px;
  margin: 72px 190px 80px;

  & .fieldset {
    gap: 16px;
  }
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 30px;
`;

export const StFooterWrapper = styled.div`
  margin: 40px 0 0;
`;

export const StTip = styled(StTextBox)`
  margin: 0 0 10px;
  font-size: 0.66rem;
  line-height: 1rem;
`;
