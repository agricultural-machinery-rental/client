import { Metadata } from 'next';
// import { createContext, useContext } from 'react';

import { Catalog } from '@/widgets/Catalog';
import { Filters } from '@/widgets/Catalog/filters';

import { StFlex, StHeading2 } from '@/shared/styles/global';

// import { TFilters } from './type';

export const metadata: Metadata = {
  title: 'Catalog',
};

// createContext can not be used without 'use client'
// Metadata can not be used with 'use client' :(
// const CatalogFilters = createContext<TFilters | {}>({});

const PageCatalog = () => {
  return (
    <>
      <StHeading2 $margin='0 0 80px' $textAlign='left'>
        Каталог
      </StHeading2>
      <StFlex $flexDirection={'row'}>
        {/* <CatalogFilters.Provider value={{}}> */}
        <Filters />
        <Catalog />
        {/* </CatalogFilters.Provider> */}
      </StFlex>
    </>
  );
};
/* 
export const useUserContext = () => {
  return useContext(CatalogFilters);
};
 */
export default PageCatalog;
