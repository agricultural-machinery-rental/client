import { JSX } from 'react';

import { StDotsContainer } from './styled';

export const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  appendDots: (dots: JSX.Element) => (
    <StDotsContainer>
      <ul> {dots} </ul>
    </StDotsContainer>
  ),
};
