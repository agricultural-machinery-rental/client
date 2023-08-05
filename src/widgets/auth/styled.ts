import styled from 'styled-components';
import { StHeading3 } from '@/styles/global';
import { theme } from '@/styles/theme';

export const StContainer = styled.div`
  width: 346px;
  margin: 80px 190px;
`;

export const StTitle = styled(StHeading3)`
  margin: 0 0 56px;
`;

export const StAuthFormLink = styled.div`
  align-self: flex-start;
  font-size: 0.5rem;
  line-height: 0.66rem;
  color: ${theme.colors.link};
  margin: 8px 0 0 8px;
  cursor: pointer;
`;
