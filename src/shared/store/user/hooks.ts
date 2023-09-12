import { TUserDto } from '@/shared/model/typing';
import { store } from '@/shared/store/store';

import { getUser } from './slice';

export const useGetUser = (): TUserDto | null => getUser(store.getState());
