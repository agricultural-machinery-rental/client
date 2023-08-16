import { Item } from '@/entities/Catalog';

import { temporatyItemData } from '@/shared/catalog';

import { StCatalogFlex } from './styled';

export const Catalog = () => {
  return (
    <StCatalogFlex>
      {temporatyItemData.map((item, id) => (
        <Item key={id} itemData={item} />
      ))}
    </StCatalogFlex>
  );
};
