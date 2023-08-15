import { FC } from 'react';

import Edit from '@/shared/icons/edit.svg';
import { BookingItem } from '@/shared/ui/BookingItem';

import { type TBookingCurrentItem } from './typing';

const BookingCurrentItem: FC<TBookingCurrentItem> = ({ name, ...props }) => {
  const editButton = (
    <div onClick={() => console.log('Клик')}>
      <Edit width={24} height={24} />
    </div>
  );
  return <BookingItem name={name} button={editButton} {...props} />;
};

export { BookingCurrentItem };
