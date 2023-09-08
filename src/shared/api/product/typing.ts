import { TMachineryDto } from '@/shared/api/typing';

export type TMachineriesRequestData = Partial<{
  category: number;
  limit: number;
  location: string;
  mark: string;
  name: string;
  offset: number;
  price_per_hour_max: string;
  price_per_hour_min: string;
  price_per_shift_max: string;
  price_per_shift_min: string;
  region: string;
  work_type: string;
}>;

export type TMachineriesResponseData = TMachineryDto[];
export type TMachineryResponseData = TMachineryDto;
export type TMakeFavoriteResponseData = TMachineryDto;
