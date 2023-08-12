import { FC } from 'react';

import { TBooking } from './typing';

export const Booking: FC<TBooking> = ({ data }) => {
  return (
    <>
      <div>{data.date}</div>
      <div>{data.name}</div>
      <div>{data.status}</div>
      <div>{data.price}</div>
    </>
  );
};
