import { TOrderDto } from '@/shared/model/typing';

export type TBookingData = {
  date: string;
  name: string;
  status: string;
  price: string;
};

export type TBookingRow = {
  orderData: TOrderDto;
};
