import { Metadata } from 'next';

import type { TLayout } from '@/shared/model';

export const metadata: Metadata = {
  title: 'Favourites',
};

const FavouritesLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default FavouritesLayout;
