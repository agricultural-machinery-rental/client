import { FC, useContext } from 'react';

import { Form } from '@/features/Form';

import { ModalContext } from '@/entities/Modal';

import { temporatyItemData } from '@/shared/catalog';
import { modalWindows } from '@/shared/modal/modalWindows';
import { StFlex, StTextBox } from '@/shared/styles/global';
import { Button } from '@/shared/ui/Button';

import { bookingConfig } from '../config';

import { StContainer, StTitle, StButton, StFormWrapper } from './styled';

export const BookingEditForm: FC = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleBookingConfirm = () => {
    // TODO добавить submit формы
    closeModal();
    openModal(modalWindows.bookingSuccess);
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
          label='Отменить заявку'
          $designType='secondary'
          onClick={() => openModal(modalWindows.bookingCancel)}
        />
      </StFlex>
    </StFlex>
  );

  return (
    <StContainer>
      {/* TODO получать данные itemData.name */}
      <StTitle>Редактирование бронирования {temporatyItemData[0].name}</StTitle>
      <StFormWrapper>
        {/* TODO заменить handleFormSubmit */}
        <Form fields={bookingConfig} handleFormSubmit={handleBookingConfirm} footer={footer} />
      </StFormWrapper>
    </StContainer>
  );
};
