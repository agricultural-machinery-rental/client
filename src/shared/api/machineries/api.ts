import { instance, API_ENDPOINTS } from '@/shared/api/config';

import type { TMachineriesResponseData } from './typing';

export const machineriesAPI = {
  getMachineries: () => instance.get<TMachineriesResponseData>(`${API_ENDPOINTS.machineries}`),
};
