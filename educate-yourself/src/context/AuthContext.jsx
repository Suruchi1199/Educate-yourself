import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("eduvision_user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);//now had read the user from local storage, so we can set loading to false
  }, []);

  // TODO: replace with POST /api/auth/login once the Spring Boot backend is live
  const login = async ({ email }) => {
    const mockUser = { name: email.split("@")[0], email, token: "mock-jwt-token" };
    localStorage.setItem("eduvision_user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  // TODO: replace with POST /api/auth/register
  const register = async ({ name, email }) => {
    const mockUser = { name, email, token: "mock-jwt-token" };
    localStorage.setItem("eduvision_user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem("eduvision_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside an AuthProvider");
  return ctx;
}
