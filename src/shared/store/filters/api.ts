import { instance, API_ENDPOINTS } from '@/shared/api/config';

import type {
  TBrandNamesResponseData,
  TWorkTypeResponseData,
  TMachineryInfoResponseData,
} from './typing';

export const filtersAPI = {
  getMachineryBrandnames: () =>
    instance.get<TBrandNamesResponseData>(`${API_ENDPOINTS.machineries}/brands/`),
  getMachineryInfo: () =>
    instance.get<TMachineryInfoResponseData>(`${API_ENDPOINTS.machineries}/models/`),
  getWorktypes: () =>
    instance.get<TWorkTypeResponseData>(`${API_ENDPOINTS.machineries}/work_type/`),
  //   getLocations: () => instance.get(),
};
