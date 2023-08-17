import { FC } from 'react';

import type { TBookingRow } from './typing';

export const BookingRow: FC<TBookingRow> = ({ data }) => {
  return (
    <>
      <div>{data.date}</div>
      <div>{data.name}</div>
      <div>{data.status}</div>
      <div>{data.price}</div>
    </>
  );
};
