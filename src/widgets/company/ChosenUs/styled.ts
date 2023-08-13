import { styled } from 'styled-components';

import { StContainer } from '@/shared/styles/global';

export const StSection = styled.section`
  margin-bottom: 80px;
  background: rgba(255, 255, 255, 0.7);
`;

export const StContainerInner = styled(StContainer)`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 40px 0 54px;
  gap: 26px;
`;

export const StList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 346px);
  grid-template-rows: repeat(2, 280px);
  gap: 0 32px;
`;
