import { TMachineryInfoDto } from '@/shared/model/typing';

export type TBrandNamesResponseData = {
  brand: string;
  country_of_origin: string;
};

export type TMachineryInfoResponseData = TMachineryInfoDto;

export type TWorkTypeResponseData = {
  title: string;
  slug: string;
};
