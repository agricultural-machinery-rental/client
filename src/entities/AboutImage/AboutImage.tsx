import React, { FC } from 'react';
import type { TAboutImage } from './typing';

import { StAboutImageWrap, StAboutImageItem } from './styled';
import { aboutImageSize } from './aboutImageData';

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
