import { FC, useState } from 'react';

import { BookingCancel } from './CancelBooking';
import { EditBookingForm } from './EditBookingForm';
import type { TBookingEditForm } from './typing';

export const EditBooking: FC<TBookingEditForm> = ({
  productId,
  productName,
  daterange,
  message,
}) => {
  const [content, setContent] = useState<'edit' | 'cancel'>('edit');

  return (
    <>
      {content === 'edit' ? (
        <EditBookingForm
          productId={productId}
          productName={productName}
          daterange={daterange}
          message={message}
          openBookingCancel={() => setContent('cancel')}
        />
      ) : (
        <BookingCancel productId={productId} buttonBackClick={() => setContent('edit')} />
      )}
    </>
  );
};
