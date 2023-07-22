'use client';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.header`
  flex-shrink: 0;
  border-bottom: 2px solid #000;
`;

export const MainContentWrapper = styled.main`
  flex-grow: 1;
`;

export const FooterWrapper = styled.footer`
  border-top: 2px solid #000;
  flex-shrink: 0;
`;
