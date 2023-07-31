'use client';
import React from 'react';
import type { TNewsItem } from '../../shared/api/news';
import { CompanyNews } from '../../entities/companyNews/CompanyNewsItem';
import { NewsData } from '../../shared/api/news';

export const NewsList = () => {
  return (
    <div>
      {NewsData.map((item: TNewsItem, index) => (
        <CompanyNews image={item.image} title={item.title} date={item.date} key={`item-${index}`} />
      ))}
    </div>
  );
};
