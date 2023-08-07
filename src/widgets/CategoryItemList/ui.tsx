'use client';

import React from 'react';

import {
  CategoryItemContainer,
  type TCategoryItemContainer,
} from '@/entities/Product/CategoryItemContainer';

import { CategoryItemData } from './api/data';
import { StCategoryList, StCategoryListWrapper } from './styled';

export const CategoryItemList = () => {
  return (
    <section>
      <StCategoryListWrapper>
        <StCategoryList>
          {CategoryItemData.map((item: TCategoryItemContainer, index) => (
            <CategoryItemContainer image={item.image} title={item.title} key={`item-${index}`} />
          ))}
        </StCategoryList>
      </StCategoryListWrapper>
    </section>
  );
};
