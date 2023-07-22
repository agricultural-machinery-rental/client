import { Header } from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import StyledComponentsRegistry from '../../lib/registry';

import { BodyWrapper, HeaderWrapper, MainContentWrapper, FooterWrapper } from './styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <BodyWrapper>
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
            <MainContentWrapper>{children}</MainContentWrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </BodyWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
