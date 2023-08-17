import { styled } from 'styled-components';

import { StContainer } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';

export const StSection = styled.section`
  margin-bottom: 80px;
  background: ${theme.colors.bgOpacity7};
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
  grid-template-columns: repeat(auto-fill, minmax(346px, 1fr));
  grid-auto-rows: 280px;
  gap: 0 32px;
`;
