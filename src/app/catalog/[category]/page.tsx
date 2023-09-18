import { Catalog } from '@/widgets/Catalog';
import { Filters } from '@/widgets/Catalog/filters';

import { machineriesAPI } from '@/shared/api';
import { catalogItemCategory } from '@/shared/catalog';
import { FiltersProvider } from '@/shared/model/filterContext';
import { StFlex, StHeading2 } from '@/shared/styles/global';

const PageCatalogCategory = async ({ params }: { params: { category: string } }) => {
  const category = params.category;
  const categoryId =
    category in catalogItemCategory
      ? catalogItemCategory[category as keyof typeof catalogItemCategory]
      : null;

  const machineries = await machineriesAPI.getMachineries(categoryId);

  return (
    <>
      <StHeading2 $margin='0 0 80px' $textAlign='left'>
        Каталог
      </StHeading2>
      <StFlex $flexDirection={'row'}>
        <FiltersProvider>
          <Filters />
          <Catalog machineries={machineries.data} />
        </FiltersProvider>
      </StFlex>
    </>
  );
};

export default PageCatalogCategory;
