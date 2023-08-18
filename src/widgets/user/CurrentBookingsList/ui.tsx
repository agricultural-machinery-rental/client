import { EditBooking } from '@/features/EditBooking';

import { BookingCurrentItem } from '@/entities/BookingCurrentItem';
import { useModalContext } from '@/entities/Modal';

import Edit from '@/shared/icons/edit.svg';

import { orders } from './constants';
import { StButton, StContainer } from './styled';

const CurrentBookingsList = () => {
  const { openModal } = useModalContext();

  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {orders.map((orderData, key) => {
          const EditButton = () => (
            <StButton
              onClick={() =>
                openModal(
                  <EditBooking productId={''} productName={''} daterange={[]} message={''} />,
                )
              }
            >
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
