import Link from 'next/link';
import styled from 'styled-components';
import { StContainer, StHeading3 } from '@/styles/global';
import { theme } from '@/styles/theme';

export const StCompanyInfo = styled.div`
  display: flex;
  width: 100%;
`;

export const StCompanyInfoWrap = styled(StContainer)`
  padding: 32px 0 88px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StHeadingCompanyInfo = styled.h1`
  text-align: left;
  margin-bottom: 8px;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export const StSubHeadingCompanyInfo = styled(StHeading3)`
  text-align: left;
  margin: 0;
  font-size: 1.5rem;
  line-height: 32px;
  font-weight: 400;
`;

export const StParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StAdvantagesList = styled.ul`
  list-style-type: decimal;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StAdvantageItem = styled.li`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StLink = styled(Link)`
  color: ${theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;
