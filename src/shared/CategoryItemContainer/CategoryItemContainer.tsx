'use client';

import React, { FC } from 'react';
import tractorImg from '@/assets/images/blue-tractor.jpg';
import { StCategoryItem, StCategoryItemImage, StCategoryItemTitle } from './styled';

export type TCategoryItemContainer = {
  image: JSX.Element;
  title: string;
};

export const CategoryItemContainer: FC<TCategoryItemContainer> = ({ image, title }) => {
  return (
    <StCategoryItem>
      <StCategoryItemImage>{image}</StCategoryItemImage>
      <StCategoryItemTitle>{title}</StCategoryItemTitle>
    </StCategoryItem>
  );
};
