import { TUserDto } from '@/shared/model/typing';
import { store } from '@/shared/store/store';

import { getMachineries } from './slice';

export const useGetMachineries = (): TUserDto | null => getMachineries(store.getState());
