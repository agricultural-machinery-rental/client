import { filterName } from '@/widgets/Catalog';

export type TFilters = {
  [key in keyof typeof filterName]: string | Record<string, number>;
};
