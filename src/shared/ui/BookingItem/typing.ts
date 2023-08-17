import { StaticImageData } from 'next/image';
import React from 'react';

export type TBookingItem = {
  photo: StaticImageData;
  name: string;
  dates?: string;
  category?: string;
  comment?: string;
  children?: React.ReactNode;
};
