import { styled } from 'styled-components';

import { StFlex, StNextLink } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StFooterWrapper = styled(StFlex)`
  margin: 48px 0 0;
`;

export const StLink = styled(StNextLink)`
  display: inline;
  font-size: 0.5rem;
  color: ${theme.colorsText.alternate};
`;

export const StContainer = styled.div`
  width: 346px;
  margin: 80px;

  & .fieldset {
    gap: 24px;
  }
`;

export const StTopTextBox = styled.div`
  margin: 0 0 32px;
`;
