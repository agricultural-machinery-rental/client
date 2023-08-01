import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '../config/config';
import { TDataArray } from './typing';
import { StSwiper, StSwiperImg } from './styled';

export const Swiper: FC<TDataArray> = ({ dataArray }) => {
  console.log(dataArray);

  return (
    <StSwiper>
      <Slider {...config}>
        {dataArray.map((item, index) => {
          return (
            <StSwiper key={index}>
              <StSwiperImg src={item.src} alt='Изображение трактора' />
            </StSwiper>
          );
        })}
      </Slider>
    </StSwiper>
  );
};
