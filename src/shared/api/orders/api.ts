import { API_ENDPOINTS, instance } from '@/shared/api/config';

import {
  TOrderRequestData,
  TOrdersResponseData,
  TPostOrderResponseData,
  TGetOrderResponseData,
} from './typing';

export const ordersAPI = {
  getOrders: () => instance.get<TOrdersResponseData>(`${API_ENDPOINTS.orders}/`),
  postOrder: (data: TOrderRequestData) =>
    instance.post<TPostOrderResponseData>(`${API_ENDPOINTS.orders}/`, data),
  getOrder: (id: number) => instance.get<TGetOrderResponseData>(`${API_ENDPOINTS.orders}/${id}/`),
  cancelOrder: (id: number) => instance.post(`${API_ENDPOINTS.orders}/${id}/cancel/`),
  //   editOrder: (id: number) => instance.put(`${API_ENDPOINTS.orders}/${id}/`),
  //   editOrder: (id: number) => instance.patch(`${API_ENDPOINTS.orders}/${id}/`),
};
