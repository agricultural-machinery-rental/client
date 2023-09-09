import axios from 'axios';

import { instance, API_ENDPOINTS } from '@/shared/api/config';

import type {
  TSigninRequestData,
  TSignupRequestData,
  TSigninResponseData,
  TSignupResponseData,
  TUserResponseData,
  TRefreshTokenResponseData,
} from './typing';

export const sessionAPI = {
  getUser: (id: number, token: string) =>
    instance.get<TUserResponseData>(`${API_ENDPOINTS.users}/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  getToken: (data: TSigninRequestData) =>
    instance.post<TSigninResponseData>(`${API_ENDPOINTS.users}/token/`, data),
  signup: (data: TSignupRequestData) =>
    instance.post<TSignupResponseData>(`${API_ENDPOINTS.users}/`, data),
  refreshToken: () =>
    axios.get<TRefreshTokenResponseData>(`${API_ENDPOINTS.users}/token/refresh/`, {
      withCredentials: true,
    }),
};
