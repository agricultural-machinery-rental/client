import styled from 'styled-components';
import { StContainer } from '@/styles/global';

export const StCategoryListWrapper = styled(StContainer)`
  margin: 0 auto;
`;

export const StCategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  gap: 48px 32px;
`;
