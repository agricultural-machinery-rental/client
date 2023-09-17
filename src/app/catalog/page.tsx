'use client';
import { Catalog } from '@/widgets/Catalog';
import { Filters } from '@/widgets/Catalog/filters';

import { FiltersProvider } from '@/shared/model/filterContext';
import { StFlex, StHeading2 } from '@/shared/styles/global';

const PageCatalog = () => {
  return (
    <>
      <StHeading2 $margin='0 0 80px' $textAlign='left'>
        Каталог
      </StHeading2>
      <StFlex $flexDirection={'row'}>
        <FiltersProvider>
          <Filters />
          <Catalog />
        </FiltersProvider>
      </StFlex>
    </>
  );
};

export default PageCatalog;
