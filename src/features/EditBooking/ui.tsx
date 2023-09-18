import { FC, useState } from 'react';

import { BookingCancel } from './CancelBooking';
import { EditBookingForm } from './EditBookingForm';
import type { TBookingEditForm } from './typing';

export const EditBooking: FC<TBookingEditForm> = ({ orderData }) => {
  const [content, setContent] = useState<'edit' | 'cancel'>('edit');

  const daterange = [new Date(orderData.start_date), new Date(orderData.end_date)];

  return (
    <>
      {content === 'edit' ? (
        <EditBookingForm
          productId={orderData.id.toString()}
          productName={orderData.id.toString()}
          daterange={daterange}
          message={orderData.comment}
          openBookingCancel={() => setContent('cancel')}
        />
      ) : (
        <BookingCancel
          productId={orderData.id.toString()}
          buttonBackClick={() => setContent('edit')}
        />
      )}
    </>
  );
};
