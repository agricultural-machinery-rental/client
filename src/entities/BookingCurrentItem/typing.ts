import { TOrderDto } from '@/shared/model/typing';
import { type TBookingItem } from '@/shared/ui/BookingItem';

export type TBookingCurrentItem = {
  orderData: TOrderDto;
} & Pick<TBookingItem, 'children'>;
