import { FC, useState } from 'react';

import { Form, type TBookingFormParams } from '@/entities/Form';

import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { bookingConfig } from './config';
import { EditBookingSuccess } from './EditBookingSuccess';
import { StContainer, StTitle, StButton, StFormWrapper } from './styled';

export type TEditBookingForm = {
  productId: string;
  productName: string;
  daterange: number[];
  message: string;
  openBookingCancel: () => void;
};

export const EditBookingForm: FC<TEditBookingForm> = ({
  productId,
  productName,
  daterange,
  message,
  openBookingCancel,
}) => {
  const [status, setStatus] = useState<'pending' | 'success'>('pending');
  const [newDaterange, setNewDaterange] = useState<number[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleEditBooking = (data: TBookingFormParams) => {
    // TODO заменить на функцию отправки данных на сервер
    // postOrder(productId, data).then(setStatus('success'));
    setNewDaterange(data.daterange);
    setNewMessage(data.message);

    // Для презентации отображаем успешную отправку данных
    setStatus('success');
    console.log(productId, data);
  };

  const defaultValues: TBookingFormParams = {
    daterange: daterange,
    message: message,
  };

  const footer = (
    <StFlex $flexDirection='column' $alignItems='center' $gap={48}>
      <StButton>
        <Button label='Сохранить изменения' $designType='primary' />
      </StButton>

      <StFlex $flexDirection='column' $alignItems='center' $gap={8}>
        <StTextBox $fontSize={0.67} $lineHeight={1} $textAlign='center'>
          Вы также можете
        </StTextBox>
        <Button
          type='button'
          label='Отменить заявку'
          $designType='secondary'
          onClick={openBookingCancel}
        />
      </StFlex>
    </StFlex>
  );

  return (
    <>
      {status === 'pending' ? (
        <StContainer>
          <StTitle>Редактирование бронирования {productName}</StTitle>
          <StFormWrapper>
            <Form
              fields={bookingConfig}
              handleFormSubmit={handleEditBooking}
              footer={footer}
              defaultValues={defaultValues}
            />
          </StFormWrapper>
        </StContainer>
      ) : (
        <EditBookingSuccess
          productName={productName}
          daterange={newDaterange}
          message={newMessage}
        />
      )}
    </>
  );
};
