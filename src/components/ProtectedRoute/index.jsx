import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = () => {
  const { authorized } = useAuthContext();
  if (authorized) {
    return <Outlet />;
  } else {
    <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
