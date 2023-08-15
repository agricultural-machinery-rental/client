import Star from '@/shared/icons/star.svg';

import { StButton } from './styled';

const AddToFavorite = () => {
  return (
    <StButton>
      <Star width={40} height={37} />
    </StButton>
  );
};

export { AddToFavorite };
