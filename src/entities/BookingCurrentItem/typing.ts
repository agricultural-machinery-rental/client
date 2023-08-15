import { type TBookingItem } from '@/shared/ui/BookingItem';

export type TBookingCurrentItem = Required<
  Pick<TBookingItem, 'photo' | 'name' | 'dates' | 'comment'>
> &
  Pick<TBookingItem, 'children'>;
