import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user/model';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof rootReducer>;
// Inferred type: {user: TUserStatus}
export type TAppDispatch = ReturnType<typeof setupStore>['dispatch'];
