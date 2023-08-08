import Link from 'next/link';
import { styled } from 'styled-components';

import { StContainer, StHeading3, StFlex } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StCompanyInfo = styled.div`
  display: flex;
  width: 100%;
`;

export const StCompanyInfoWrap = styled(StContainer)`
  padding: 60px 0 88px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StHeadingCompanyInfo = styled.h1`
  text-align: left;
  margin-bottom: 8px;
  font-size: 1.33rem;
  line-height: 1.66rem;
`;
export const StSubHeadingCompanyInfo = styled(StHeading3)`
  text-align: left;
  margin: 20px 0;
  font-size: 1rem;
  line-height: 1.33rem;
  font-weight: 700;
`;

export const StParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

export const StAdvantagesList = styled.ul`
  list-style-type: decimal;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StAdvantageItem = styled.li`
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

export const StLink = styled(Link)`
  color: ${theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;

export const StAdvantagesListWrap = styled.div`
  display: grid;
  column-gap: 35px;
  grid-template-columns: minmax(100px, 250px) auto;
`;

export const AboutImageWrap = styled(StFlex)`
  flex-direction: column;
`;
