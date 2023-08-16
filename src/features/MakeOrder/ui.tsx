import { FC, useState } from 'react';

import { Form, type TBookingFormParams } from '@/features/Form';

import { Button } from '@/shared/ui/Button';

import { BookingSuccess } from './BookingSuccess';
import { bookingConfig } from './config';
import { StContainer, StTitle, StButton, StFormWrapper } from './styled';
import type { TMakeOrder } from './typing';

export const MakeOrder: FC<TMakeOrder> = ({ productId, productName }) => {
  const [status, setStatus] = useState<'pending' | 'success'>('pending');
  const [daterange, setDaterange] = useState<number[]>([]);
  const [message, setmessage] = useState<string>('');

  const handleBookingConfirm = (data: TBookingFormParams) => {
    // TODO заменить на фоункцию отправки данных на сервер
    // postOrder(productId, data).then(setStatus('success'));
    setDaterange(data.daterange);
    setmessage(data.message);

    // Для презентации отображаем успешную отправку данных
    setStatus('success');
    console.log(productId, data);
  };

  const footer = (
    <StButton>
      <Button label='Забронировать' $designType='primary' />
    </StButton>
  );

  return (
    <>
      {status === 'pending' ? (
        <StContainer>
          <StTitle>Взять в аренду {productName}</StTitle>
          <StFormWrapper>
            <Form fields={bookingConfig} handleFormSubmit={handleBookingConfirm} footer={footer} />
          </StFormWrapper>
        </StContainer>
      ) : (
        <BookingSuccess productName={productName} daterange={daterange} message={message} />
      )}
    </>
  );
};
