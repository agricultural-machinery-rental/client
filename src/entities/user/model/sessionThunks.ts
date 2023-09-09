import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  sessionAPI,
  decodeToken,
  type TSigninRequestData,
  type TSignupRequestData,
} from '@/shared/api/session';

export const fetchGetUser = createAsyncThunk('session/getUser', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Пользователь не зарегистрирован');

    const decodedToken = decodeToken(token);
    if (!decodedToken) throw new Error('Ошибка дешифровки токена');

    const id = decodedToken.user_id;

    const response = await sessionAPI.getUser(id, token);

    return response.data;
  } catch (err) {
    console.error(err);
    return rejectWithValue(err);
  }
});

export const fetchSignin = createAsyncThunk(
  'session/signin',
  async (data: TSigninRequestData, { rejectWithValue, dispatch }) => {
    try {
      const response = await sessionAPI.getToken(data);
      localStorage.setItem('token', response.data.access);

      return dispatch(fetchGetUser);
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  },
);

export const fetchSignup = createAsyncThunk(
  'session/signup',
  async (data: TSignupRequestData, { rejectWithValue }) => {
    try {
      const user = await sessionAPI.signup(data);

      return user;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  },
);
