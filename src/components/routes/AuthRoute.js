import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./IsAuthenticate.js";

const AuthRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={"/"} />;
};

export default AuthRoute;
