"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

// Entity
import { I_AuthUserEntity } from "@/core/entities/auth/authEntity";

export interface T_UserContextInitialState {
  jwt?: string;
  user?: I_AuthUserEntity;
  setUserContext: Dispatch<SetStateAction<T_UserContextInitialState | undefined>>;
}

const initialState: T_UserContextInitialState = {
  setUserContext: () => undefined,
};

export const UserContext = createContext(initialState);

interface I_UserContextProvider {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: I_UserContextProvider) => {
  const [userContext, setUserContext] = useState<T_UserContextInitialState | undefined>(undefined);

  return <UserContext.Provider value={{ ...userContext, setUserContext }}>{children}</UserContext.Provider>;
};
