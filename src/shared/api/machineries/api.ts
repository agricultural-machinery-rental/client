import axios from 'axios';

import { API_ENDPOINTS, BASE_URL } from '@/shared/api/config';

import type { TMachineriesResponseData, TMachineryResponseData } from './typing';

export const machineriesAPI = {
  getMachineries: (categoryId: number | null) => {
    let query = '';
    query += categoryId ? `category=${categoryId}` : '';
    return axios.get<TMachineriesResponseData>(`${BASE_URL}${API_ENDPOINTS.machinery}/?${query}`);
  },
  getMachineriesTop: () =>
    axios.get<TMachineriesResponseData>(`${BASE_URL}${API_ENDPOINTS.machinery}/top/`),
  getMachinery: (id: number) =>
    axios.get<TMachineryResponseData>(`${BASE_URL}${API_ENDPOINTS.machinery}/${id}/`),
};
