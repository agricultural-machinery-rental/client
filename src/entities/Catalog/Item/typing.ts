import { TMachineryDto } from '@/shared/model/typing';

export type TItem = {
  itemData: TMachineryDto;
  buttonClick?: () => void;
};
