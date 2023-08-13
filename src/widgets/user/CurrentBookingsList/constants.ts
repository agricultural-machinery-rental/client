import { TBookingCurrentItem } from '@/entities/booking/BookingCurrentItem';

import photo from '@/shared/photos/photo.jpg';

export const orders: TBookingCurrentItem[] = [
  {
    photo,
    name: 'Трактор R-40',
    dates: 'Забронирован с 30.07 по 12.08',
    comment: 'Обл. Ростовская, район Зерноградский, поселок Донской. Аренда с экипажем.',
  },
  {
    photo,
    name: 'Трактор R-41',
    dates: 'Забронирован с 30.07 по 12.08',
    comment: 'Обл. Ростовская, район Зерноградский, поселок Донской. Аренда с экипажем.',
  },
];
