'use client';

import { TUserDto } from '@/shared/model/typing';
import { store } from '@/shared/store/store';

import { getUser } from './slice';

export const useGetUser = (): TUserDto | null => getUser(store.getState());

export const useAuth = (): boolean => {
  const user = useGetUser();

  return !(!user && typeof window !== 'undefined');
};
