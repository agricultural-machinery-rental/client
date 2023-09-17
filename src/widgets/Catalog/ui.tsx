import { useEffect } from 'react';

import { MakeOrder } from '@/features/MakeOrder';
import { Signin } from '@/features/Signin';

import { Item } from '@/entities/Catalog';
import { useModalContext } from '@/entities/Modal';

import { getFilteredItemsData } from '@/shared/catalog';
import { useCategoryByUrl } from '@/shared/hooks';
import { useCatalogFilters } from '@/shared/model/filterContext';
import { TMachineryDto } from '@/shared/model/typing';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import {
  isLoading as isMachineriesLoading,
  getMachineries,
  fetchGetMachineries,
} from '@/shared/store/machineries';
import { useGetUser } from '@/shared/store/user';

import { StCatalogFlex } from './styled';

export const Catalog = () => {
  const user = useGetUser();
  const { openModal } = useModalContext();
  const { filters } = useCatalogFilters();

  const category = useCategoryByUrl();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(isMachineriesLoading);
  const machineries = useAppSelector(getMachineries);

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

  useEffect(() => {
    dispatch(fetchGetMachineries(category));
  }, [category, dispatch]);

  if (isLoading) {
    return <b>Загрузка...</b>;
  }

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
