'use client';

import Link from 'next/link';
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
            <Link href={'/catalog?' + item.category} key={`item-${index}`}>
              <CategoryItemContainer {...item} />
            </Link>
          ))}
        </StCategoryList>
      </StContainer>
    </StSection>
  );
};
