import { type TBookingItem } from '@/shared/ui/BookingItem';

export type TBookingCurrentItem = Pick<TBookingItem, 'photo' | 'name'> & {
  dates: string;
  comment: string;
};
