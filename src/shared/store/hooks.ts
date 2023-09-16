import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { TRootState, TAppDispatch } from '@/shared/store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
