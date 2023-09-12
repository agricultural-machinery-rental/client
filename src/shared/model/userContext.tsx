'use client';

import React, { createContext, useContext, useState } from 'react';

import { TUser } from '@/shared/api/mockUser';

import { TLayout } from '.';

type TUserContext = {
  user: TUser | null;
  signup: (user: TUser) => void;
  logout: () => void;
};

const defaultUserState = {
  user: null,
  signup: () => {},
  logout: () => {},
};

export const UserContext = createContext<TUserContext>(defaultUserState);

export const UserProvider: TLayout = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(defaultUserState.user);

  const signup = (user: TUser) => {
    setUser(user);
  };
  const logout = () => setUser(null);

  return <UserContext.Provider value={{ user, signup, logout }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
