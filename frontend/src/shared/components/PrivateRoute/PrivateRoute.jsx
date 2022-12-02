import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

import { getIsAuthorized } from "../../../redux/auth/authSelectors";

export const PrivateRoute = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  return isAuthorized ? <Outlet /> : <Navigate to="signin" replace />;
};
