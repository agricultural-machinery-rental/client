import React, { FC } from 'react';
import { aboutImageSize } from './aboutImageData';
import { StAboutImageWrap, StAboutImageItem } from './styled';
import type { TAboutImage } from './typing';

export const AboutImage: FC<TAboutImage> = ({ image, alt }) => {
  return (
    <StAboutImageWrap>
      <StAboutImageItem
        src={image}
        width={aboutImageSize.width}
        height={aboutImageSize.height}
        alt={alt}
      />
    </StAboutImageWrap>
  );
};
