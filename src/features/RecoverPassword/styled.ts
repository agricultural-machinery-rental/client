import { styled } from 'styled-components';

import { StHeading3, StTextBox, StFlex } from '@/shared/styles/global';

export const StFooterWrapper = styled(StFlex)`
  width: 346px;
  margin: 0 190px;
`;

export const StContainer = styled.div`
  margin: 72px 0 80px;
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 56px;
`;

export const StSendingMessage = styled(StTextBox)`
  min-height: 32px;
  margin: 8px 0 0 8px;
`;
