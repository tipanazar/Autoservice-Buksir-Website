import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

import { getIsAuthorized } from "../../../redux/auth/authSelectors";

export const PublicRoute = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  return isAuthorized ? <Navigate to="/admin" replace /> : <Outlet />;
};
