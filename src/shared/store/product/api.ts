import { instance, API_ENDPOINTS } from '@/shared/api/config';
import { queryStringify } from '@/shared/api/lib';

import type {
  TMachineriesRequestData,
  TMachineriesResponseData,
  TMachineryResponseData,
  TMakeFavoriteResponseData,
} from './typing';

export const productAPI = {
  getMachineries: (data: TMachineriesRequestData) => {
    const url = queryStringify(data);
    return instance.get<TMachineriesResponseData>(`${API_ENDPOINTS.machinery}/${url}/`);
  },
  getMachinery: (id: number) =>
    instance.get<TMachineryResponseData>(`${API_ENDPOINTS.machinery}/${id}/`),
  makeFavorite: (id: number) =>
    instance.post<TMakeFavoriteResponseData>(`${API_ENDPOINTS.machinery}/${id}/favorite/`),
  excludeFavorite: (id: number) => instance.delete(`${API_ENDPOINTS.machinery}/${id}/favorite/`),
};
