import { FC } from 'react';

import { mockOrders } from './api';
import { BookingRow } from './BookingRow';
import { StGrid, StGridHead } from './styled';

export const BookingHistory: FC = () => {
  return (
    <StGrid>
      <StGridHead>Дата</StGridHead>
      <StGridHead>Техника</StGridHead>
      <StGridHead>Статус</StGridHead>
      <StGridHead>Сумма</StGridHead>
      {mockOrders.map((booking, key) => (
        <BookingRow key={key} data={booking} />
      ))}
    </StGrid>
  );
};
