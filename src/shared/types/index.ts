import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

type TDynamicRoute<ParamName extends string> = FC<{ params: { [key in ParamName]: string } }>;

/** Тип, позволяющий все ключи объекта сделать необязательными */
// eslint-disable-next-line
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

/** Типы нескольких/всех ключей Base заменяются на новые типы из объекта Overrides */
type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;

export type { TLayout, TDynamicRoute, PartialRecord, Overwrite };
