import { FavoriteItem } from '@/entities/booking/FavoriteItem';

import { favorites } from './constants';
import { StContainer } from './styled';

const FavoritesList = () => {
  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {favorites.map((favoriteData, key) => {
          return <FavoriteItem key={key} {...favoriteData} />;
        })}
      </StContainer>
    </section>
  );
};

export { FavoritesList };
