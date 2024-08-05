import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    let accessToken = localStorage.getItem("accessToken");
    return accessToken ? { token: accessToken } : null;
  });

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    if (auth) {
      localStorage.setItem("accessToken", auth?.token);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
