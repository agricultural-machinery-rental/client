import { MakeOrder } from '@/features/MakeOrder';
import { Signin } from '@/features/Signin';

import { Item } from '@/entities/Catalog';
import { useModalContext } from '@/entities/Modal';

import { getFilteredItemsData } from '@/shared/catalog';
import { useCatalogFilters } from '@/shared/model/filterContext';
import { TMachineryDto } from '@/shared/model/typing';
import { useGetUser } from '@/shared/store/user';

import { StCatalogFlex } from './styled';
export const Catalog = ({ machineries }: { machineries: TMachineryDto[] }) => {
  const user = useGetUser();
  const { openModal } = useModalContext();
  const { filters } = useCatalogFilters();

  const openModalWithContent = (data: TMachineryDto) => {
    if (user) {
      openModal(
        <MakeOrder
          productId={data.id}
          productName={`${data.machinery.mark.brand} ${data.machinery.name}`}
        />,
      );
    } else {
      openModal(<Signin />);
    }
  };

  const filteredItemsData = getFilteredItemsData(filters, machineries);

  if (!filteredItemsData.length) {
    return <b>Ничего не найдено</b>;
  }

  return (
    <StCatalogFlex>
      {filteredItemsData.map((item, id) => (
        <Item key={id} itemData={item} buttonClick={() => openModalWithContent(item)} />
      ))}
    </StCatalogFlex>
  );
};
