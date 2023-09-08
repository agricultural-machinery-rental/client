import axios from 'axios';

export const BASE_URL = 'https://agropark.acceleratorpracticum.ru';

const API_MAIN_ENDPOINT = '/api/v1';

export const API_ENDPOINTS = {
  users: `${API_MAIN_ENDPOINT}/users`,
  machineries: `${API_MAIN_ENDPOINT}/machineries`,
  machinery: `${API_MAIN_ENDPOINT}/machineries/machinery`,
  orders: `${API_MAIN_ENDPOINT}/orders`,
};

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
