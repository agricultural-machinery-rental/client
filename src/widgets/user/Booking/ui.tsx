import { FC } from 'react';

import { Form } from '@/features/Form';

import { itemData } from '@/shared/catalog';
import { Button } from '@/shared/ui/Button';

import { bookingConfig } from './config';
import { StContainer, StTitle, StButton, StFormWrapper } from './styled';

export const BookingForm: FC = () => {
  const footer = (
    <StButton>
      <Button
        label='Забронировать'
        $designType='primary'
        //   TODO заменить функцию в onClick
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
        <Form fields={bookingConfig} handleFormSubmit={console.log} footer={footer} />
      </StFormWrapper>
    </StContainer>
  );
};
