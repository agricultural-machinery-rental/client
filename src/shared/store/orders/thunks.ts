import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ordersAPI, type ValidationErrors } from '@/shared/api';
import { TOrderRequestData } from '@/shared/api/orders';

export const fetchGetOrders = createAsyncThunk(
  'orders/getOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ordersAPI.getOrders();
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

export const fetchPostOrder = createAsyncThunk(
  'orders/postOrder',
  async (data: TOrderRequestData, { rejectWithValue }) => {
    try {
      const response = await ordersAPI.postOrder(data);
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
