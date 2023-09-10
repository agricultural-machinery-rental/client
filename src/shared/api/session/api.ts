import axios from 'axios';

import { instance, API_ENDPOINTS, BASE_URL } from '@/shared/api/config';

import type {
  TSigninRequestData,
  TSignupRequestData,
  TSigninResponseData,
  TSignupResponseData,
  TUserResponseData,
  TRefreshTokenResponseData,
} from './typing';

export const sessionAPI = {
  getUser: (id: number) => instance.get<TUserResponseData>(`${API_ENDPOINTS.users}/${id}/`),
  getToken: (data: TSigninRequestData) =>
    instance.post<TSigninResponseData>(`${API_ENDPOINTS.users}/token/`, data),
  signup: (data: TSignupRequestData) =>
    instance.post<TSignupResponseData>(`${API_ENDPOINTS.users}/`, data),
  refreshToken: (refreshToken: string) =>
    axios.post<TRefreshTokenResponseData>(
      `${BASE_URL}${API_ENDPOINTS.users}/token/refresh/`,
      refreshToken,
    ),
};
