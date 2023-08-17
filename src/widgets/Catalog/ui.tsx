import { MakeOrder } from '@/features/MakeOrder';
import { Signin } from '@/features/Signin';

import { Item } from '@/entities/Catalog';
import { useModalContext } from '@/entities/Modal';

import { TCatalogItem, temporatyItemData } from '@/shared/catalog';
import { useUserContext } from '@/shared/model/userContext';

import { StCatalogFlex } from './styled';

export const Catalog = () => {
  const { user } = useUserContext();
  const { openModal } = useModalContext();

  const openModalWithContent = (data: TCatalogItem) => {
    if (user) {
      openModal(<MakeOrder productId={data.name} productName={data.name} />);
    } else {
      openModal(<Signin />);
    }
  };

  return (
    <StCatalogFlex>
      {temporatyItemData.map((item, id) => (
        <Item key={id} itemData={item} buttonClick={() => openModalWithContent(item)} />
      ))}
      {/* Зачем это здесь?
      {temporatyItemData.map((item, id) => (
        <Item key={id} itemData={item} />
      ))}
*/}
    </StCatalogFlex>
  );
};
