import { Metadata } from 'next';
import { Catalog } from '@/widgets/Catalog';
import { Filters } from '@/widgets/Catalog/filters';
import { StFlex, StHeading2 } from '@/shared/styles/global';

export const metadata: Metadata = {
  title: 'Catalog',
};

const PageCatalog = () => {
  return (
    <>
      <StHeading2>Каталог</StHeading2>
      <StFlex $flexDirection={'row'}>
        <Filters />
        <Catalog />
      </StFlex>
    </>
  );
};

export default PageCatalog;
