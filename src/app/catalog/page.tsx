import { Metadata } from 'next';

import { Catalog } from '@/widgets/Catalog';

import { StFlex, StHeading2 } from '@/shared/styles/global';

import { StCatalog } from './styled';

export const metadata: Metadata = {
  title: 'Catalog',
};

const PageCatalog = () => {
  return (
    <StCatalog>
      <StHeading2>Каталог</StHeading2>
      <StFlex $flexDirection={'row'}>
        <div>Filters</div>
        <Catalog />
      </StFlex>
    </StCatalog>
  );
};

export default PageCatalog;
