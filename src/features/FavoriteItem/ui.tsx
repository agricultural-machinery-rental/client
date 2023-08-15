import { FC } from 'react';

import { AddToFavorite } from '@/entities/AddToFavorite';

import { BookingItem } from '@/shared/ui/BookingItem';

import { type TFavoriteItem } from './typing';

const FavoriteItem: FC<TFavoriteItem> = ({ name, ...props }) => {
  const button = <AddToFavorite />;
  return <BookingItem name={name} button={button} {...props} />;
};

export { FavoriteItem };
