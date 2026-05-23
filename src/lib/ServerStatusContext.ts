import { createContext } from "react";

export interface ServerStatusContextType {
  setStatusCode?: (code: number) => void;
}

export const ServerStatusContext = createContext<ServerStatusContextType>({});
