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
  padding: 200px 0 80px; // TODO поправить верхний отступ, когда будут хлебные крошки
`;

export const StMainHeading = styled(StFlex)`
  padding: 80px 0;
`;
