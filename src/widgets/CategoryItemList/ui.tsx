'use client';

import React from 'react';

import {
  CategoryItemContainer,
  type TCategoryItemContainer,
} from '@/entities/Product/CategoryItemContainer';

import { StContainer } from '@/shared/styles/global';

import { CategoryItemData } from './api/data';
import { StCategoryList } from './styled';

export const CategoryItemList = () => {
  return (
    <section>
      <StContainer>
        <StCategoryList>
          {CategoryItemData.map((item: TCategoryItemContainer, index) => (
            <CategoryItemContainer image={item.image} title={item.title} key={`item-${index}`} />
          ))}
        </StCategoryList>
      </StContainer>
    </section>
  );
};
