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
  background: url('/background.png') no-repeat center;
  background-size: cover;
  padding-bottom: 80px;
`;

export const StMainHeading = styled(StFlex)`
  padding: 80px 0 56px;
`;
