import { FC, useEffect, useState } from 'react';

import { TOrderDto } from '@/shared/model/typing';
import { orderStatus } from '@/shared/orders';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { fetchGetOrders, getOrders, isLoading } from '@/shared/store/orders';

import { BookingRow } from './BookingRow';
import { StGrid, StGridHead } from './styled';

export const BookingHistory: FC = () => {
  const dispatch = useAppDispatch();

  const [historyOrders, setHistoryOrders] = useState<TOrderDto[]>();

  const orders = useAppSelector(getOrders);
  const loading = useAppSelector(isLoading);

  useEffect(() => {
    dispatch(fetchGetOrders());
  }, [dispatch]);

  useEffect(() => {
    setHistoryOrders(orders?.filter(order => order.status === orderStatus.finished));
  }, [orders]);

  if (!orders && loading) return <p>Загрузка...</p>;

  if (!historyOrders || !historyOrders.length) return <p>Нет заказов в истории</p>;

  return (
    <StGrid>
      <StGridHead>Дата</StGridHead>
      <StGridHead>Техника</StGridHead>
      <StGridHead>Статус</StGridHead>
      <StGridHead>Сумма</StGridHead>
      {historyOrders.map((order, key) => (
        <BookingRow key={key} orderData={order} />
      ))}
    </StGrid>
  );
};
