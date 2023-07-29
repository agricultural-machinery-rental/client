'use client';

import React, { FC } from 'react';
import type { TCategoryItemContainer } from '@/shared/CategoryItemContainer/CategoryItemContainer';
import { StCategoryList, StCategoryListWrapper } from './styled';
import { CategoryItemContainer } from '../CategoryItemContainer/CategoryItemContainer';
import TractorImg from '@/assets/images/blue-tractor.svg';

const CategoryItemData: TCategoryItemContainer[] = [
  {
    image: <TractorImg />,
    title: 'Тракторы',
  },
  {
    image: <TractorImg />,
    title: 'Комбаины',
  },
  {
    image: <TractorImg />,
    title: 'Посевная техника',
  },
  {
    image: <TractorImg />,
    title: 'Мототракторы',
  },
  {
    image: <TractorImg />,
    title: 'Прицепы',
  },
  {
    image: <TractorImg />,
    title: 'Плуги',
  },
  {
    image: <TractorImg />,
    title: 'Погрузчики',
  },
  {
    image: <TractorImg />,
    title: 'Навесное оборудование',
  },
];

export const CategoryItemList = () => {
  return (
    <section>
      <StCategoryListWrapper>
        <StCategoryList>
          {CategoryItemData.map((item: TCategoryItemContainer, index) => (
            <CategoryItemContainer image={item.image} title={item.title} key={index} />
          ))}
        </StCategoryList>
      </StCategoryListWrapper>
    </section>
  );
};
