import { styled } from 'styled-components';

export const StListItem = styled.li`
  display: grid;
  grid-template-rows: 50% 50%;
  justify-items: center;
  gap: 24px;
`;

export const StListItemImg = styled.img`
  align-self: flex-end;
`;

export const StListItemText = styled.p`
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  max-width: 314px;
  align-self: flex-start;
`;
