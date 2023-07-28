'use client';
import styled from 'styled-components';
import { zindex } from '@/styles/zindex';

export const PageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: ${zindex.page};
`;

export const StMain = styled.main`
  flex-grow: 1;
  margin: 104px 0 0;
`;
