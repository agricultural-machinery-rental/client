import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

type TDynamicRoute<ParamName extends string> = FC<{ params: { [key in ParamName]: string } }>;

/**
 * ⚠️ FSD
 *
 * Its hack way to export redux infering types from @/app
 * and use it in @/shared/model/hooks.ts
 */

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TRootState = import('../../app/store').TRootState;
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TAppDispatch = import('../../app/store').TAppDispatch;

export type { TLayout, TDynamicRoute, TRootState, TAppDispatch };
