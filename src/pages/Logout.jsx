import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="container mx-auto flex items-center justify-center p-4">
      <h1 className="text-2xl font-bold">You have been logged out</h1>
    </div>
  );
};

export default Logout;
