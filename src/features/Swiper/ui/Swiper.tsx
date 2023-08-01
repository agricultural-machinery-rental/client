import Image from 'next/image';
import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '../config/config';
import { TDataArray } from './typing';
import { StSwiper } from './styled';

export const Swiper: FC<TDataArray> = ({ dataArray }) => {
  console.log(dataArray);

  return (
    <StSwiper>
      <Slider {...config}>
        {dataArray.map((item, index) => (
          <Image key={index} src={item.src} alt={item.alt} height={347} />
        ))}
      </Slider>
    </StSwiper>
  );
};
