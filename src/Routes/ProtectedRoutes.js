import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useMemo(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    return userId && token ? true : false;
  }, [children]);
  return isAuthenticated ? children : <Navigate to={`/login`} />;
};

export default ProtectedRoutes;
