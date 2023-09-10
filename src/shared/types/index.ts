import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

type TDynamicRoute<ParamName extends string> = FC<{ params: { [key in ParamName]: string } }>;

/**
 * ⚠️ FSD
 *
 * Its hack way to export redux infering types from @/app
 * and use it in @/shared/model/hooks.ts
 */

type TRootState = import('@/app/store').TRootState;

type TAppDispatch = import('@/app/store').TAppDispatch;

export type { TLayout, TDynamicRoute, TRootState, TAppDispatch };
