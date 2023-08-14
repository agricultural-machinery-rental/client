import { type TBookingItem } from '@/shared/ui/BookingItem';

export type TFavoriteItem = Pick<TBookingItem, 'photo' | 'name'> & {
  category: string;
  comment: string;
};
