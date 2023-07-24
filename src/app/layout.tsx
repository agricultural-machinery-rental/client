import '@/styles/global.css';
import { Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import StyledComponentsRegistry from '../../lib/registry';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <Header location={'Москва'} />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
