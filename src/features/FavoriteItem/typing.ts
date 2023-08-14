import { type TBookingItem } from '@/shared/ui/BookingItem';

export type TFavoriteItem = Required<Pick<TBookingItem, 'photo' | 'name' | 'category' | 'comment'>>;
