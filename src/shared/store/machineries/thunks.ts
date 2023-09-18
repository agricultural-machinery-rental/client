import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { machineriesAPI, type ValidationErrors } from '@/shared/api';
import { catalogItemCategory } from '@/shared/catalog';

export const fetchGetMachineries = createAsyncThunk(
  'machineries/getMachineries',
  async (category: keyof typeof catalogItemCategory | null, { rejectWithValue }) => {
    try {
      const categoryId = category ? catalogItemCategory[category] : null;
      const response = await machineriesAPI.getMachineries(categoryId);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ValidationErrors>;
      console.error(err);
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchGetMachinery = createAsyncThunk(
  'machineries/getMachinery',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await machineriesAPI.getMachinery(id);
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
