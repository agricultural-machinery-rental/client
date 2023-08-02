import React, { FC } from 'react';
import type { TAboutImage } from '../../shared/api/AboutImage';

import { AboutImageWrap, AboutImageItem } from './styled';

export const AboutImage: FC<TAboutImage> = ({ image }) => {
  return (
    <AboutImageWrap>
      <AboutImageItem src={image} />
    </AboutImageWrap>
  );
};
