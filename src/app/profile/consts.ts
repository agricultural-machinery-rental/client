import { TProfileNavLink } from '@/widgets/ProfileNav';

import { PATH } from '@/shared/constants/path';

export const profileLinks: TProfileNavLink[] = [
  {
    text: 'Мой профиль',
    href: PATH.Profile,
  },
  {
    text: 'Текущие заявки',
    href: PATH.Orders,
  },
  {
    text: 'История бронирования',
    href: PATH.BookingHistory,
  },
  {
    text: 'Избранное',
    href: PATH.Favourites,
  },
];
