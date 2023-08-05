'use client';

import React, { useState } from 'react';
import { Button } from '@/shared/Button';

export const ButtonBooking = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonBookingClick = () => {
    if (!clicked) {
      setClicked(true);
    }

    setTimeout(() => {
      alert('Бронирование добавлено в корзину');
    }, 500);
  };

  return (
    <Button
      label='Забронировать'
      type='submit'
      onClick={handleButtonBookingClick}
      disabled={clicked}
    />
  );
};
