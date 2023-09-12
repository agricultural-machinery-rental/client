import type { Metadata } from 'next';
import React from 'react';
// import { Provider as StoreProvider } from 'react-redux';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { Breadcrumbs } from '@/features/Breadcrumbs';

import { ModalProvider } from '@/entities/Modal';
import { Modal } from '@/entities/Modal/ui';

import { UserProvider } from '@/shared/model/userContext';
import StyledComponentsRegistry from '@/shared/styles/registry';
import { GlobalStyles } from '@/shared/styles/reset';

// import { store } from '@/shared/store/store';
import { PageContent, StMain } from './styled';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {/* <StoreProvider store={store}> */}
          <PageContent>
            <UserProvider>
              <ModalProvider>
                <Header />
                <StMain>
                  <Breadcrumbs />
                  {children}
                </StMain>
                <Footer />
                <Modal />
              </ModalProvider>
            </UserProvider>
          </PageContent>
          {/* </StoreProvider> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
