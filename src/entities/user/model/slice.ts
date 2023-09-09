import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TUserDto } from '@/shared/api/typing';
import { TRootState } from '@/shared/types';

import { fetchGetUser, fetchSignin, fetchSignup } from './sessionThunks';

type TUserStatus = {
  authorized: boolean;
  user: TUserDto | null;
  isLoading: boolean;
  error: string;
};

// Define the initial state
const initialState: TUserStatus = {
  authorized: false,
  user: null,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
    setUser: (state, action: PayloadAction<TUserDto>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.user = action.payload;
      })
      .addCase(fetchGetUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.user = null;
      })
      .addCase(fetchSignin.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSignin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
      })
      .addCase(fetchSignup.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.user = null;
      });
  },
});

export const { setIsAuth, setUser } = userSlice.actions;

export const isAuth = (state: TRootState) => state.user.authorized;
export const getUser = (state: TRootState) => state.user.user;
