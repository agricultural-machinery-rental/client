import { AddToFavorite } from '@/features/AddToFavorite';

import { FavoriteItem } from '@/entities/FavoriteItem';

import { favorites } from './constants';
import { StButton, StContainer } from './styled';

const FavoritesList = () => {
  return (
    <section>
      <StContainer $flexDirection='column' $gap={16}>
        {favorites.map((favoriteData, key) => {
          const AddButton = () => (
            <StButton>
              <AddToFavorite />
            </StButton>
          );

          return (
            <FavoriteItem key={key} {...favoriteData}>
              <AddButton />
            </FavoriteItem>
          );
        })}
      </StContainer>
    </section>
  );
};

export { FavoritesList };
