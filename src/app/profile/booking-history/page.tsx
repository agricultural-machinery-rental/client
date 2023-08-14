import { Metadata } from 'next';

import { BookingHistory } from '@/widgets/BookigHistory';

export const metadata: Metadata = {
  title: 'Booking history',
};

const BookingHistoryPage = () => {
  return <BookingHistory />;
};

export default BookingHistoryPage;
