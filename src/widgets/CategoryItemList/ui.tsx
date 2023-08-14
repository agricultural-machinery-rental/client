'use client';

import React from 'react';

import {
  CategoryItemContainer,
  type TCategoryItemContainer,
} from '@/entities/Product/CategoryItemContainer';

import { StContainer, StHeading1 } from '@/shared/styles/global';

import { CategoryItemData } from './api/data';
import { StCategoryList, StSection } from './styled';

export const CategoryItemList = () => {
  return (
    <StSection>
      <StContainer>
        <StHeading1>Аренда сельхозтехники</StHeading1>
        <StCategoryList>
          {CategoryItemData.map((item: TCategoryItemContainer, index) => (
            <CategoryItemContainer image={item.image} title={item.title} key={`item-${index}`} />
          ))}
        </StCategoryList>
      </StContainer>
    </StSection>
  );
};
