import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { machineriesSlice } from './machineries';
import { userSlice } from './user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  machineries: machineriesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof rootReducer>;
// Inferred type: {user: TUserStatus}
export type TAppDispatch = typeof store.dispatch;
