import { FC } from 'react';

import { BookingItem } from '@/shared/ui/BookingItem';

import { type TFavoriteItem } from './typing';

const FavoriteItem: FC<TFavoriteItem> = ({ children, ...props }) => {
  return <BookingItem {...props}>{children}</BookingItem>;
};

export { FavoriteItem };
