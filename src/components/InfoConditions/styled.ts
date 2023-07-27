import styled from 'styled-components';
import { StContainer, StHeading3 } from '@/styles/global';

export const StInfoConditions = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(217, 217, 217, 0.3);
`;

export const StInfoConditionsWrap = styled(StContainer)`
  padding: 100px 0 42px 0;
  margin: 0 auto;
`;

export const StHeadingInfoConditions = styled(StHeading3)`
  margin-bottom: 80px;
  width: 80%;
  line-height: 4rem;
`;

export const StSubHeadingInfoConditions = styled(StHeading3)`
  text-align: left;
  margin-top: 115px;
  margin-bottom: 50px;
`;

export const StParagraph = styled.p`
  max-width: 350px;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 100px;
`;

export const StConditionsList = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
`;

export const StListItem = styled.li`
  font-size: 1rem;
  margin-top: 8px;
`;

export const StLink = styled.a`
  color: #e57c4e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
