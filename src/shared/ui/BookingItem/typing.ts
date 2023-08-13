import { StaticImageData } from 'next/image';
import { JSX } from 'react';

export type TBookingItem = {
  photo: StaticImageData;
  name: string;
  button: JSX.Element;
  dates?: string;
  category?: string;
  comment?: string;
};
