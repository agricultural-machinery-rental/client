import { styled } from 'styled-components';

import { StFlex, StHeading3, StNextSpan, StTextBox } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StFooterWrapper = styled(StFlex)`
  width: 348px;
  margin: 24px 200px 0;
`;

export const StLink = styled(StNextSpan)`
  display: inline;
  font-size: 0.5rem;
  color: ${theme.colorsText.alternate};
`;

export const StContainer = styled.div`
  margin: 80px 0;
  & .fieldset {
    gap: 16px;
  }
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 40px;
`;

export const StTip = styled(StTextBox)`
  margin: 0 0 24px;
`;

export const StSpan = styled.span`
  color: ${theme.colorsText.error};
`;
