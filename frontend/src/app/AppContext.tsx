import React from "react";
import { Role } from "../types/Role";

export interface AppState {
  role: Role;
  setRole: (role: Role) => void;
}

const AppContext = React.createContext<AppState | null>(null);

export function AppProvider<T>(props: T) {
  const [role, setRole] = React.useState<Role>("user");
  const appState: AppState = {
    role,
    setRole,
  };

  return <AppContext.Provider value={appState} {...props} />;
}

export function useRole() {
  const context: AppState | null = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useRole must be used within a AppProvider`);
  }

  return {
    role: context.role,
    setRole: context.setRole,
  };
}
