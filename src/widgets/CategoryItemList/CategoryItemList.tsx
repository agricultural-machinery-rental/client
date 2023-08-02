'use client';

import React, { FC } from 'react';
import type { TCategoryItemContainer } from '@/entities/Product/CategoryItemContainer/typing';
import { StCategoryList, StCategoryListWrapper } from './styled';
import { CategoryItemContainer } from '../../entities/Product/CategoryItemContainer/CategoryItemContainer';
import { CategoryItemData } from './api/data';

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
