'use client';
import { styled } from 'styled-components';

import { StFlex } from '@/shared/styles/global';
import { zindex } from '@/shared/styles/zindex';

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: ${zindex.page};
`;

export const StMain = styled.main`
  flex-grow: 1;
`;

export const StMainHeading = styled(StFlex)`
  padding: 80px 0;
`;
