'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TUserDto } from '@/shared/model/typing';
import { TRootState } from '@/shared/store/store';

import { fetchGetUser, fetchSignin, fetchSignup } from './thunks';

type TUserStatus = {
  data: TUserDto | null;
  isLoading: boolean;
  error: string;
};

// Define the initial state
const initialState: TUserStatus = {
  data: null,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserDto>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchGetUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.data = null;
      })
      .addCase(fetchSignin.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSignin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
      })
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchSignup.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.data = null;
      });
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state: TRootState) => state.user.data;
export const isLoading = (state: TRootState) => state.user.isLoading;
export const error = (state: TRootState) => state.user.error;
