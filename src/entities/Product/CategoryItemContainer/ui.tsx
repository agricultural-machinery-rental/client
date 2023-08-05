import React, { FC } from 'react';

import {
  StCategoryItem,
  StCategoryItemImage,
  StCategoryItemTitle,
  StCategoryTitleWrapper,
} from './styled';
import type { TCategoryItemContainer } from './typing';

export const CategoryItemContainer: FC<TCategoryItemContainer> = ({ image, title }) => {
  return (
    <StCategoryItem>
      <StCategoryItemImage>{image}</StCategoryItemImage>
      <StCategoryTitleWrapper>
        <StCategoryItemTitle>{title}</StCategoryItemTitle>
      </StCategoryTitleWrapper>
    </StCategoryItem>
  );
};
