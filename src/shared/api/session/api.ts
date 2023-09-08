import { instance, API_ENDPOINTS } from '@/shared/api/config';

import type {
  TSigninRequestData,
  TSignupRequestData,
  TSigninResponseData,
  TSignupResponseData,
  TUserResponseData,
} from './typing';

export const sessionAPI = {
  getUser: (id: number, token: string) =>
    instance.get<TUserResponseData>(`${API_ENDPOINTS.users}/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  signin: (data: TSigninRequestData) =>
    instance.post<TSigninResponseData>(`${API_ENDPOINTS.users}/token/`, data),
  signup: (data: TSignupRequestData) =>
    instance.post<TSignupResponseData>(`${API_ENDPOINTS.users}/`, data),
};
