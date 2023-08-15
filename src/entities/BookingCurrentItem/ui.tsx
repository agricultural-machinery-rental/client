import { FC } from 'react';

import { BookingItem } from '@/shared/ui/BookingItem';

import { type TBookingCurrentItem } from './typing';

const BookingCurrentItem: FC<TBookingCurrentItem> = ({ children, ...props }) => {
  return <BookingItem {...props}>{children}</BookingItem>;
};

export { BookingCurrentItem };
