import { StFlex } from '@/shared/styles/global';
import { BookingItem } from '@/shared/ui/BookingItem';

const Orders = () => {
  return (
    <StFlex $flexDirection='column' $gap={16}>
      <BookingItem />
      <BookingItem />
      <BookingItem />
    </StFlex>
  );
};

export default Orders;
