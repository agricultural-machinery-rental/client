import Image from 'next/image';
import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from './config/config';
import { StSwiper } from './styled';
import { TDataArray } from './typing';

export const Swiper: FC<TDataArray> = ({ dataArray }) => {
  return (
    <StSwiper>
      <Slider {...config}>
        {dataArray.map((item, index) => (
          <Image
            key={index}
            src={`${item.image}`}
            alt={item.description_image}
            height={476}
            width={536}
          />
        ))}
      </Slider>
    </StSwiper>
  );
};
