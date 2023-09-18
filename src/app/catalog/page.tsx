import { Catalog } from '@/widgets/Catalog';
import { Filters } from '@/widgets/Catalog/filters';

import { machineriesAPI } from '@/shared/api';
import { FiltersProvider } from '@/shared/model/filterContext';
import { StFlex, StHeading2 } from '@/shared/styles/global';

const PageCatalog = async () => {
  const machineries = await machineriesAPI
    .getMachineriesTop()
    .catch(async () => await machineriesAPI.getMachineries(null));

  return (
    <>
      <StHeading2 $margin='0 0 80px' $textAlign='left'>
        Каталог1
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

export default PageCatalog;
