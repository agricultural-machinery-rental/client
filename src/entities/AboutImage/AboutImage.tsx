import React, { FC } from 'react';
import type { TAboutImage } from '@/shared/api/AboutImage';

import { StAboutImageWrap, StAboutImageItem } from './styled';

export const AboutImage: FC<TAboutImage> = ({ image }) => {
  return (
    <StAboutImageWrap>
      <StAboutImageItem src={image} />
    </StAboutImageWrap>
  );
};
