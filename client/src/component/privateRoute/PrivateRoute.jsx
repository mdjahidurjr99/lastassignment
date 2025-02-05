import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ auth: children }) => {
  let isLogin = !!Cookies.get("token");
  return !!isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
