import { type TBookingData } from './Booking';

export const mockOrders: TBookingData[] = [
  {
    date: '20 июля',
    name: 'Трактор EFG-4',
    status: 'Завершено',
    price: '24000',
  },
  {
    date: '20 июня',
    name: 'Трактор EFG-5',
    status: 'Отменен',
    price: '0',
  },
  {
    date: '20 апреля',
    name: 'Трактор EFG-5',
    status: 'Завершено',
    price: '34500',
  },
];
