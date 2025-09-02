import { createContext, useState } from "react";

type AuthValue = string;

interface AuthContextType {
  username: AuthValue;
  role: AuthValue;
  token: AuthValue;
  login: (username: AuthValue, role: AuthValue, token: AuthValue) => void;
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
  const [username, setUsername] = useState<AuthValue>("");
  const [role, setRole] = useState<AuthValue>("");
  const [token, setToken] = useState<AuthValue>("");

  const login = (username: AuthValue, role: AuthValue, token: AuthValue) => {
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
