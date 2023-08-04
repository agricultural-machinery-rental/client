import React, { FC } from 'react';
import type { TAboutImage } from './typing';

import { StAboutImageWrap, StAboutImageItem } from './styled';

export const AboutImage: FC<TAboutImage> = ({ image, alt }) => {
  return (
    <StAboutImageWrap>
      <StAboutImageItem src={image} height={180} width={250} alt={alt} />
    </StAboutImageWrap>
  );
};
