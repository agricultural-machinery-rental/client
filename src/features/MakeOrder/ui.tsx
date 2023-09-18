import { FC, useState } from 'react';

import { Form } from '@/entities/Form';

import { ordersAPI } from '@/shared/api';
import { type TBookingFormParams } from '@/shared/form';
import { Button } from '@/shared/ui/Button';

import { BookingSuccess } from './BookingSuccess';
import { bookingConfig } from './config';
import { StContainer, StTitle, StButton, StFormWrapper } from './styled';
import type { TMakeOrder } from './typing';

export const MakeOrder: FC<TMakeOrder> = ({ itemData }) => {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [daterange, setDaterange] = useState<Date[]>([]);
  const [message, setmessage] = useState<string>('');

  const productName = `${itemData.machinery.mark.brand} ${itemData.machinery.name}`;

  const handleBookingConfirm = async (data: TBookingFormParams) => {
    const postData = {
      machinery: Number(itemData.id),
      start_date: data.daterange[0].toISOString(),
      end_date: data.daterange[1].toISOString(),
      comment: data.message,
    };

    await ordersAPI
      .postOrder(postData)
      .then(() => {
        setDaterange(data.daterange);
        setmessage(data.message);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
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
      ) : status === 'error' ? (
        // TODO: Заменить на компонент с ошибкой
        <>
          <p>Произошла ошибка!</p>
          <p>Возможно техника занята на выбранные даты</p>
        </>
      ) : (
        <BookingSuccess productName={productName} daterange={daterange} message={message} />
      )}
    </>
  );
};
