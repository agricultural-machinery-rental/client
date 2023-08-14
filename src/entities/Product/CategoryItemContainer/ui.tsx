import Image from 'next/image';
import React, { FC } from 'react';

import { StCategoryItem, StCategoryItemTitle, StCategoryTitleWrapper } from './styled';
import type { TCategoryItemContainer } from './typing';

export const CategoryItemContainer: FC<TCategoryItemContainer> = ({ image, title }) => {
  return (
    <StCategoryItem>
      <Image src={image} alt={title} height={168} />
      <StCategoryTitleWrapper>
        <StCategoryItemTitle>{title}</StCategoryItemTitle>
      </StCategoryTitleWrapper>
    </StCategoryItem>
  );
};
