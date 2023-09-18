import { Metadata } from 'next';

import type { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Booking history',
};

const BookingHistoryPageLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default BookingHistoryPageLayout;
