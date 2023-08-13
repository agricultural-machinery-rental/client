import { BookingCurrentItem } from '@/entities/booking/BookingCurrentItem';

import { orders } from './constants';
import { StContainer } from './styled';

const CurrentBookingsList = () => {
  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {orders.map((orderData, key) => {
          return <BookingCurrentItem key={key} {...orderData} />;
        })}
      </StContainer>
    </section>
  );
};

export { CurrentBookingsList };
