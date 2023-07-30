import React, { FC } from 'react';
import type { TCategoryItemContainer } from './typing';
import {
  StCategoryItem,
  StCategoryItemImage,
  StCategoryItemTitle,
  StCategoryTitleWrapper,
} from './styled';

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
