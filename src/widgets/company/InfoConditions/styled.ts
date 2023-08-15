import Link from 'next/link';
import { styled } from 'styled-components';

import { StContainer, StFlex, StHeading2 } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StInfoConditions = styled.section`
  display: flex;
  width: 100%;
  background: ${theme.colors.bgOpacity7};
`;

export const StInfoConditionsWrap = styled(StContainer)`
  padding: 80px 0;
`;

export const StHeadingInfoConditions = styled(StHeading2)`
  font-size: 1.333em;
  line-height: 3rem;
  text-align: center;
  margin: 0 auto 80px;
  width: 80%;
`;

export const StText = styled.p`
  font-size: 0.83rem;
  margin: 88px 0 0;
`;

export const StInfoBlockFlex = styled(StFlex)`
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const StParagraph = styled.p`
  max-width: 340px;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.25rem;
  padding: 0 35px;
  margin-bottom: 32px;
`;

export const StRulesLink = styled.span`
  color: ${theme.colors.link};
  font-size: 0.83rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const StLink = styled(Link)`
  color: ${theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;
