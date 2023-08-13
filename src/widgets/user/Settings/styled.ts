import { styled } from 'styled-components';

import { StFlex } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StContainer = styled.div`
  width: 346px;

  & .fieldset {
    gap: 16px;
  }
`;

export const StTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.33rem;
  text-align: left;
  margin: 0 0 16px;
  color: ${theme.colorsText.primary};
`;

export const StFooterWrapper = styled(StFlex)`
  flex-direction: column;
  gap: 104px;
  margin: 40px 0 0;
`;
