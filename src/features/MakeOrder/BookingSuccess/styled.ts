import { styled } from 'styled-components';

import { StHeading3, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

export const StContainer = styled.div`
  width: 534px;
  margin: 80px 96px;
  & .fieldset {
    gap: 32px;
  }
`;

export const StWrapper = styled.div`
  margin: 0 94px;
  align-items: center;
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StButton = styled(Button)`
  font-weight: 700;
  font-size: 1rem;
  border: 2px solid #ff9900;
`;

export const StSubtitle = styled(StTextBox)`
  margin: 0 0 24px;
`;

export const StDateSpan = styled.span`
  white-space: nowrap;
`;
