import { instance, API_ENDPOINTS } from '@/shared/api/config';

import type { TMachineriesResponseData, TMachineryResponseData } from './typing';

export const machineriesAPI = {
  getMachineries: (categoryId: number | null) => {
    let query = '';
    query += categoryId ? `category=${categoryId}` : '';
    return instance.get<TMachineriesResponseData>(`${API_ENDPOINTS.machinery}?${query}`);
  },
  getMachinery: (id: number) =>
    instance.get<TMachineryResponseData>(`${API_ENDPOINTS.machinery}/${id}`),
};
