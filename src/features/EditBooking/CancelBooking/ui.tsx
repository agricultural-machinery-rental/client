import { FC, useState } from 'react';

import { StFlex } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { CancelBookingSuccess } from './CancelBookingSuccess';
import { StContainer, StTitle } from './styled';
import type { TBookingCancel } from './typing';

export const BookingCancel: FC<TBookingCancel> = ({ productId, buttonBackClick }) => {
  const [status, setStatus] = useState<'pending' | 'success'>('pending');

  const handleCancelBooking = () => {
    // TODO заменить на функцию отправки данных на сервер
    // deleteOrder(productId).then(setStatus('success'));

    // Для презентации отображаем успешную отправку данных
    setStatus('success');
    console.log(productId);
  };
  return (
    <>
      {status === 'pending' ? (
        <StContainer>
          <StTitle>Вы уверены, что хотите отменить бронирование?</StTitle>
          <StFlex $flexDirection='column' $alignItems='center' $gap={25}>
            <Button type='button' label='Назад' $designType='secondary' onClick={buttonBackClick} />
            <Button
              type='button'
              label='Отменить заявку'
              $designType='primary'
              onClick={handleCancelBooking}
            />
          </StFlex>
        </StContainer>
      ) : (
        <CancelBookingSuccess />
      )}
    </>
  );
};
