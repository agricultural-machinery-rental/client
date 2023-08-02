import { styled } from 'styled-components';

export const StListItem = styled.li`
  display: grid;
  grid-template-rows: 50% 50%;
  justify-items: center;
  gap: 24px;
  align-items: end;
`;

export const StListItemText = styled.p`
  font-family: Open Sans;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.333em;
  max-width: 314px;
  align-self: flex-start;
`;
