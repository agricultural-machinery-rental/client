import { useEffect } from 'react';

import { EditBooking } from '@/features/EditBooking';

import { BookingCurrentItem } from '@/entities/BookingCurrentItem';
import { useModalContext } from '@/entities/Modal';

import Edit from '@/shared/icons/edit.svg';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchGetOrders, getOrders } from '@/shared/store/orders';

import { StButton, StContainer } from './styled';

const CurrentBookingsList = () => {
  const { openModal } = useModalContext();

  const dispatch = useAppDispatch();

  const orders = useAppSelector(getOrders);

  useEffect(() => {
    dispatch(fetchGetOrders());
  }, [dispatch]);

  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {orders ? (
          orders.map((orderData, key) => {
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
              <BookingCurrentItem key={key} orderData={orderData}>
                <EditButton />
              </BookingCurrentItem>
            );
          })
        ) : (
          <p>Нет заказов</p>
        )}
      </StContainer>
    </section>
  );
};

export { CurrentBookingsList };
