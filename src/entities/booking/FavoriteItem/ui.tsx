import { FC } from 'react';

import Star from '@/shared/icons/star.svg';
import { BookingItem } from '@/shared/ui/BookingItem';

import { TFavoriteItem } from './typing';
const FavoriteItem: FC<TFavoriteItem> = ({ name, ...props }) => {
  const editButton = (
    <div onClick={() => console.log('Клик')}>
      <Star width={40} height={37} />
    </div>
  );
  return <BookingItem name={name} button={editButton} {...props} />;
};

export { FavoriteItem };
