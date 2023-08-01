import Link from 'next/link';
import styled from 'styled-components';
import { StContainer, StHeading3 } from '@/styles/global';
import { theme } from '@/styles/theme';

export const StInfoConditions = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.colors.bg};
`;

export const StInfoConditionsWrap = styled(StContainer)`
  padding: 100px 0 42px 0;
  margin: 0 auto;
`;

export const StHeadingInfoConditions = styled(StHeading3)`
  margin-bottom: 80px;
  width: 80%;
`;

export const StSubHeadingInfoConditions = styled(StHeading3)`
  text-align: left;
  margin-top: 115px;
  margin-bottom: 50px;
`;

export const StParagraph = styled.p`
  max-width: 350px;
  font-size: 0.667rem;
  text-align: center;
  line-height: 1rem;
  margin-bottom: 100px;
`;

export const StConditionsList = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
`;

export const StListItem = styled.li`
  font-size: 0.667rem;
  margin-top: 8px;
`;

export const StLink = styled(Link)`
  color: ${theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`;
