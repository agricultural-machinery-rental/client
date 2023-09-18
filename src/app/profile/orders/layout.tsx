import { Metadata } from 'next';

import type { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Orders',
};

const OrdersLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default OrdersLayout;
