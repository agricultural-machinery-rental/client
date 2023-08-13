import { styled } from 'styled-components';

export const StSection = styled.section`
  padding: 80px 0 48px;
  margin-bottom: 126px;
  background: rgba(255, 255, 255, 0.3);
`;

export const StCategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  gap: 48px 32px;
`;
