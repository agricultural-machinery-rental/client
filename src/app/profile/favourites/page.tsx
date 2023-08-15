import { Metadata } from 'next';

import { FavoritesList } from '@/widgets/user/FavoritesList';

export const metadata: Metadata = {
  title: 'Favourites',
};

const Favourites = () => {
  return <FavoritesList />;
};

export default Favourites;
