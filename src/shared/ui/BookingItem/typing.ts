import React from 'react';

export type TBookingItem = {
  photo: string;
  name: string;
  dates?: string;
  category?: string;
  comment?: string;
  children?: React.ReactNode;
};
