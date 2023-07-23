import { TDynamicRoute } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking',
};

const Booking: TDynamicRoute<'id'> = ({ params }) => {
  const { id } = params;
  return <h1>Booking {id}</h1>;
};

export default Booking;
