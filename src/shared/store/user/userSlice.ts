import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TUserDto } from '@/shared/api/typing';

import type { TRootState } from '../store';

type TUserStatus = {
  authorized: boolean;
  data: TUserDto;
};

// Define the initial state
const initialState: TUserStatus = {
  authorized: false,
  data: {
    id: 0,
    last_name: '',
    first_name: '',
    patronymic: null,
    birthday: null,
    phone_number: '',
    email: '',
    organization_name: null,
    inn: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
    setUser: (state, action: PayloadAction<TUserDto>) => {
      state.data = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;

export const isAuth = (state: TRootState) => state.user.authorized;
export const getUser = (state: TRootState) => state.user.data;
