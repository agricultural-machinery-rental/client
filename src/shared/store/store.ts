import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Subscribe to log store changes. TODO: remove it
store.subscribe(() => console.log(store.getState()));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: TUserStatus}
export type AppDispatch = typeof store.dispatch;
