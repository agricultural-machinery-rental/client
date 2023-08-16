import { MakeOrder } from '@/features/MakeOrder';
import { Signin } from '@/features/Signin';

import { Item } from '@/entities/Catalog';
import { useModalContext } from '@/entities/Modal';

import { TCatalogItem, itemData } from '@/shared/catalog';
import { useUserContext } from '@/shared/model/userContext';

import { StCatalogFlex } from './styled';

export const Catalog = () => {
  const { user } = useUserContext();
  const { openModal } = useModalContext();

  const openModalWithContent = (data: TCatalogItem) => {
    if (user) {
      openModal(<MakeOrder productId={data.name} productName={data.name} />);
      return;
    }

    openModal(<Signin />);
  };

  return (
    <StCatalogFlex>
      {itemData.map((data, key) => (
        <Item key={key} itemData={data} buttonClick={() => openModalWithContent(data)} />
      ))}
    </StCatalogFlex>
  );
};
