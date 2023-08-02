import Link from 'next/link';
import styled from 'styled-components';
import { StContainer, StHeading2 } from '@/styles/global';
import { theme } from '@/styles/theme';

export const StInfoConditions = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.colors.bg};
`;

export const StInfoConditionsWrap = styled(StContainer)`
  padding: 80px 0;
  margin: 0 auto;
`;

export const StHeadingInfoConditions = styled(StHeading2)`
  font-size: 1.333em;
  line-height: 2.3rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 80px;
  width: 70%;
`;

export const StText = styled.p`
  font-size: 0.83rem;
  margin: 88px 0 0;
`;

export const StParagraph = styled.p`
  max-width: 340px;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.25rem;
  padding: 0 35px;
  margin-bottom: 32px;
`;

export const StLink = styled(Link)`
  color: ${theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;
