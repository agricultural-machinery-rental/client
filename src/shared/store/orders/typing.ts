import type { TOrderDto } from '@/shared/api/typing';

export type TOrderRequestData = {
  number: string;
  machinery: number;
  start_date: string;
  end_date: string;
  comment: string;
};

export type TOrdersResponseData = TOrderDto[];
export type TGetOrderResponseData = TOrderDto;
export type TPostOrderResponseData = {
  number: string;
  machinery: number;
  start_date: string;
  end_date: string;
  comment: string;
};
