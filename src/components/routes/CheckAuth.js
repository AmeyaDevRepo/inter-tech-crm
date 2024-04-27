import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./IsAuthenticate";

const CheckAuth = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to={`/dashboard`} />;
};

export default CheckAuth;
