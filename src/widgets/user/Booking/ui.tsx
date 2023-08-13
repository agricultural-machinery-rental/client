import { FC, useContext } from 'react';

import { Form } from '@/features/Form';

import { ModalContext } from '@/entities/Modal';

import { itemData } from '@/shared/catalog';
import { modalWindows } from '@/shared/modal/modalWindows';
import { Button } from '@/shared/ui/Button';

import { bookingConfig } from './config';
import { StContainer, StTitle, StButton, StFormWrapper } from './styled';

export const BookingForm: FC = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleBookingConfirm = () => {
    // TODO добавить submit формы
    closeModal();
    openModal(modalWindows.bookingSuccess);
  };

  const footer = (
    <StButton>
      <Button
        label='Забронировать'
        $designType='primary'
        // TODO заменить console.log
        onClick={() => console.log('Отправить данные бронирования')}
      />
    </StButton>
  );

  return (
    <StContainer>
      {/* TODO получать данные itemData.name */}
      <StTitle>Взять в аренду {itemData.name}</StTitle>
      <StFormWrapper>
        {/* TODO заменить handleFormSubmit */}
        <Form fields={bookingConfig} handleFormSubmit={handleBookingConfirm} footer={footer} />
      </StFormWrapper>
    </StContainer>
  );
};
