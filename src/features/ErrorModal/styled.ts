import { styled } from 'styled-components';

import { StHeading3, StTextBox, StFlex } from '@/shared/styles/global';

export const StErrorModal = styled(StFlex)`
  max-width: 800px;
  padding: 120px 80px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const StErrorModalTitle = styled(StHeading3)`
  font-size: 1rem;
  line-height: 1.33rem;
`;
export const StErrorModalText = styled(StTextBox)`
  list-style-type: decimal;
  margin-left: 24px;
`;
