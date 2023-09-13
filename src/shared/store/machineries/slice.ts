import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TMachineryDto } from '@/shared/model/typing';
import { TRootState } from '@/shared/store/store';

import { fetchGetMachineries } from './thunks';

type TMachineryStatus = {
  data: TMachineryDto[] | null;
  isLoading: boolean;
  error: string;
};

// Define the initial state
const initialState: TMachineryStatus = {
  data: null,
  isLoading: false,
  error: '',
};

export const machineriesSlice = createSlice({
  name: 'machineries',
  initialState,
  reducers: {
    setMachineries: (state, action: PayloadAction<TMachineryDto[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetMachineries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchGetMachineries.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetMachineries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Возникла неизвестная ошибка';
        state.data = null;
      });
  },
});

export const { setMachineries } = machineriesSlice.actions;

export const getMachineries = (state: TRootState) => state.machineries.data;
export const isLoading = (state: TRootState) => state.machineries.isLoading;
export const error = (state: TRootState) => state.machineries.error;
