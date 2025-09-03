import { createContext, useState } from "react";

interface AuthContextType {
  username: string;
  role: string;
  token: string;
  login: (username: string, role: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  username: "",
  role: "",
  token: "",
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }:any) {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const login = (username: string, role: string, token: string) => {
    setUsername(username);
    setRole(role);
    setToken(token);
    localStorage.setItem("session", JSON.stringify({ username, role, token }));
  };

  const logout = () => {
    setUsername("");
    setRole("");
    setToken("");
    localStorage.removeItem("session");
  };

  return (
    <AuthContext.Provider value={{ username, role, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
