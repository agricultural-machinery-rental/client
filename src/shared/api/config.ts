import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { sessionAPI } from './session';

export const BASE_URL = 'bugaton1.acceleratorpracticum.ru\n';

const API_MAIN_ENDPOINT = '/api/v1';

export const API_ENDPOINTS = {
  users: `${API_MAIN_ENDPOINT}/users`,
  machineries: `${API_MAIN_ENDPOINT}/machineries`,
  machinery: `${API_MAIN_ENDPOINT}/machineries/machinery`,
  orders: `${API_MAIN_ENDPOINT}/orders`,
};

export const instance = axios.create({
  // baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`;
    return config;
  },
);

instance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refresh-token');

    if (error.response.status == 401 && error.config && !error.config._isRetry && refreshToken) {
      originalRequest._isRetry = true;

      try {
        const response = await sessionAPI.refreshToken(refreshToken);
        localStorage.setItem('token', response.data.access);

        return instance.request(originalRequest);
      } catch (err) {
        console.error(err);
      }
    }
    throw error;
  },
);
