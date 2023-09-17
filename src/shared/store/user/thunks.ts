import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import {
  sessionAPI,
  decodeToken,
  type TSigninRequestData,
  type TSignupRequestData,
  type ValidationErrors,
} from '@/shared/api';

export const fetchGetUser = createAsyncThunk('session/getUser', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('access-token');
    if (!token) throw new Error('Пользователь не зарегистрирован');

    const decodedToken = decodeToken(token);
    if (!decodedToken) throw new Error('Ошибка дешифровки токена');

    const id = decodedToken.user_id;

    const response = await sessionAPI.getUser(id);
    console.log('fetchGetUser', response);

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

export const fetchSignin = createAsyncThunk(
  'session/signin',
  async (data: TSigninRequestData, { rejectWithValue, dispatch }) => {
    try {
      const response = await sessionAPI.getToken(data);

      localStorage.setItem('access-token', response.data.access);
      localStorage.setItem('refresh-token', response.data.refresh);

      return dispatch(fetchGetUser());
    } catch (err) {
      const error = err as AxiosError<ValidationErrors>;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchSignup = createAsyncThunk(
  'session/signup',
  async (data: TSignupRequestData, { rejectWithValue }) => {
    try {
      const response = await sessionAPI.signup(data);

      return response.data;
    } catch (err) {
      const error = err as AxiosError<ValidationErrors>;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  },
);
