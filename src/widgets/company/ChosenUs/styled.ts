import { styled } from 'styled-components';

import { StContainer } from '@/shared/styles/global';

export const StContainerInner = styled(StContainer)`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 46px 0 41px;
  gap: 65px;
`;

export const StList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(346px, 1fr));
  grid-auto-rows: 280px;
  gap: 48px 32px;
`;
