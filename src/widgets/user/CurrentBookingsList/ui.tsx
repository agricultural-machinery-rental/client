import { useContext } from 'react';

import { BookingCurrentItem } from '@/entities/BookingCurrentItem';
import { ModalContext } from '@/entities/Modal';

import Edit from '@/shared/icons/edit.svg';
import { modalWindows } from '@/shared/modal/modalWindows';

import { orders } from './constants';
import { StButton, StContainer } from './styled';

const CurrentBookingsList = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {orders.map((orderData, key) => {
          const EditButton = () => (
            <StButton onClick={() => openModal(modalWindows.bookingEdit)}>
              <Edit width={24} height={24} />
            </StButton>
          );

          return (
            <BookingCurrentItem key={key} {...orderData}>
              <EditButton />
            </BookingCurrentItem>
          );
        })}
      </StContainer>
    </section>
  );
};

export { CurrentBookingsList };
