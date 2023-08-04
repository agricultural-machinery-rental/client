import { TAboutImage } from './typing';

export const aboutImageSize = {
  width: 250,
  height: 180,
};

const AboutImg = `https://placehold.it/${aboutImageSize.width}x${aboutImageSize.height}`;

export const aboutImageData: TAboutImage[] = [
  {
    image: AboutImg,
    alt: 'Первая картинка',
  },
  {
    image: AboutImg,
    alt: 'Вторая картинка',
  },
  {
    image: AboutImg,
    alt: 'Третья картинка',
  },
];
