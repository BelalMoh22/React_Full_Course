import { createContext, useContext } from "react";
import type { User } from "../App";

export const DashboardContext = createContext<User>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return user;
}
