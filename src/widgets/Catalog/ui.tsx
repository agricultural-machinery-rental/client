import { Item } from '@/entities/Catalog';

import { itemData } from '@/shared/catalog';

import { StCatalogFlex } from './styled';

export const Catalog = () => {
  return (
    <StCatalogFlex>
      <Item itemData={itemData} />
      <Item itemData={itemData} />
      <Item itemData={itemData} />
      <Item itemData={itemData} />
      <Item itemData={itemData} />
    </StCatalogFlex>
  );
};
