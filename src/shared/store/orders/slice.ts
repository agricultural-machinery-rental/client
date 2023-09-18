import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TOrderDto } from '@/shared/model/typing';
import { TRootState } from '@/shared/store/store';

import { fetchGetOrders, fetchPostOrder } from './thunks';

type TOrdersStatus = {
  data: TOrderDto[] | null;
  isLoading: boolean;
  error: string;
};

// Define the initial state
const initialState: TOrdersStatus = {
  data: null,
  isLoading: false,
  error: '',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<TOrderDto[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchGetOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.data = null;
      })
      .addCase(fetchPostOrder.fulfilled, state => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchPostOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPostOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.data = null;
      });
  },
});

export const { setOrders } = ordersSlice.actions;

export const getOrders = (state: TRootState) => state.orders.data;
export const isLoading = (state: TRootState) => state.orders.isLoading;
export const error = (state: TRootState) => state.orders.error;
