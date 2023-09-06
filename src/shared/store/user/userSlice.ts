import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TUser } from '@/shared/api/mockUser';

import type { RootState } from '../store';

type TUserStatus = {
  authorized: boolean;
  data: TUser;
};

// Define the initial state using that type
const initialState: TUserStatus = {
  authorized: false,
  data: {
    lastName: '',
    firstName: '',
    middleName: '',
    birthday: undefined,
    phone: '',
    email: '',
    companyName: undefined,
    companyTIN: undefined,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser>) => {
      state.data = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;

export const isAuth = (state: RootState) => state.user.authorized;
export const getUser = (state: RootState) => state.user.data;
