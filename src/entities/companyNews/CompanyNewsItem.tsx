import React, { FC } from 'react';
import { TNewsItem } from '../../shared/api/news';

import { StCompanyNews, StCompanyNewsImage, StCompanyItemTitle, StCompanyNewsDate } from './styled';

export const CompanyNews: FC<TNewsItem> = ({ image, title, date }) => {
  return (
    <StCompanyNews>
      <StCompanyNewsImage>{image}</StCompanyNewsImage>
      <StCompanyItemTitle>{title}</StCompanyItemTitle>
      <StCompanyNewsDate>{date}</StCompanyNewsDate>
    </StCompanyNews>
  );
};
