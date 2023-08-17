import { CatalogItemClassName } from '@/shared/catalog';

import { StNextLinkCategory } from './styled';

export const CategoryFieldContent = () => {
  return (
    <ul>
      {Object.entries(CatalogItemClassName).map(([key, name]) => (
        <li key={key}>
          <StNextLinkCategory href={'/catalog?' + key}>{name}</StNextLinkCategory>
        </li>
      ))}
    </ul>
  );
};
