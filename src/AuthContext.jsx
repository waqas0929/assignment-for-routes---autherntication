import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    setAuthError(null);
    navigate("/protected-route");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const isAuthenticated = () => !!user;

  const handle403Error = (error) => {
    setAuthError(error.message);
    logout();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        handle403Error,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
