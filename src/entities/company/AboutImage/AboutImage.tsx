import React, { FC } from 'react';
import { StAboutImageWrap, StAboutImageItem } from './styled';
import type { TAboutImage } from './typing';

export const AboutImage: FC<TAboutImage> = ({ image, alt }) => {
  return (
    <StAboutImageWrap>
      <StAboutImageItem src={image} alt={alt} />
    </StAboutImageWrap>
  );
};
