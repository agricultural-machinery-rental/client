import { styled } from 'styled-components';

import { StHeading3 } from '@/shared/styles/global';

export const StConsent = styled.div`
  max-width: 800px;
  padding: 80px;
`;
export const StConsentWrap = styled.div``;
export const StConsentTitle = styled(StHeading3)`
  font-size: 1rem;
  margin-bottom: 40px;
`;
export const StConsentList = styled.ul`
  margin-left: 24px;
`;
export const StConsentItem = styled.li`
  list-style-type: decimal;
  line-height: 1rem;
  font-size: 0.66rem;
`;
export const StConsentItemDot = styled.li`
  list-style-type: none;
  line-height: 1rem;
  font-size: 0.66rem;
  position: relative;

  &:before {
    content: '•';
    position: absolute;
    float: left;
    left: -14px;
  }
`;
