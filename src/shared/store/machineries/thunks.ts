import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { machineriesAPI, type ValidationErrors } from '@/shared/api';

export const fetchGetMachineries = createAsyncThunk(
  'session/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await machineriesAPI.getMachineries();
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
