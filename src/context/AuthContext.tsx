import { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  username: string;
  role: string;
  token: string;
  setUsername: (name: string) => void;
  setRole: (role: string) => void;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  username: "",
  role: "",
  token: "",
  setUsername: () => {},
  setRole: () => {},
  setToken: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider
      value={{ username, role, token, setUsername, setRole, setToken, }}>
      {children}
    </AuthContext.Provider>
  );
}

