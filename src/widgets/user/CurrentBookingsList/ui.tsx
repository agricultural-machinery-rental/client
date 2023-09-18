import { useEffect, useState } from 'react';

import { EditBooking } from '@/features/EditBooking';

import { BookingCurrentItem } from '@/entities/BookingCurrentItem';
import { useModalContext } from '@/entities/Modal';

import Edit from '@/shared/icons/edit.svg';
import { TOrderDto } from '@/shared/model/typing';
import { orderStatus } from '@/shared/orders';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchGetOrders, getOrders, isLoading } from '@/shared/store/orders';

import { StButton, StContainer } from './styled';

const CurrentBookingsList = () => {
  const { openModal } = useModalContext();

  const [activeOrders, setActiveOrders] = useState<TOrderDto[]>();

  const dispatch = useAppDispatch();

  const orders = useAppSelector(getOrders);
  const loading = useAppSelector(isLoading);

  useEffect(() => {
    dispatch(fetchGetOrders());
  }, [dispatch]);

  useEffect(() => {
    setActiveOrders(
      orders?.filter(
        order => order.status !== orderStatus.cancelled && order.status !== orderStatus.finished,
      ),
    );
  }, [orders]);

  if (!orders && loading) return <p>Загрузка...</p>;

  if (!activeOrders || !activeOrders.length) return <p>Нет текущих заказов</p>;

  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {activeOrders.map((orderData, key) => {
          const EditButton = () => (
            <StButton onClick={() => openModal(<EditBooking orderData={orderData} />)}>
              <Edit width={24} height={24} />
            </StButton>
          );

          return (
            <BookingCurrentItem key={key} orderData={orderData}>
              <EditButton />
            </BookingCurrentItem>
          );
        })}
      </StContainer>
    </section>
  );
};

export { CurrentBookingsList };
