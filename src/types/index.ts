import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

type TDynamicRoute<ParamName extends string> = FC<{ params: { [key in ParamName]: string } }>;

export type { TLayout, TDynamicRoute };
