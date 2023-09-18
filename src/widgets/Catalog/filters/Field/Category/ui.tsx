import { CatalogItemCategoryName } from '@/shared/catalog';
import { useCategoryByUrl } from '@/shared/hooks';

import { StNextLinkCategory } from './styled';

export const CategoryFieldContent = () => {
  const category = useCategoryByUrl();

  return (
    <ul>
      {Object.entries(CatalogItemCategoryName).map(([key, name]) => (
        <li key={key}>
          <StNextLinkCategory $disabled={category === key} href={'/catalog/' + key}>
            {name}
          </StNextLinkCategory>
        </li>
      ))}
    </ul>
  );
};
