import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const authProtected = ["/login", "register"];
  const tokenProtected = ["/profile", "/edit-profile", "/dashboard"];
  const roleProtected = ["/dashboard"];

  console.log(pathname);
  /*
   * TODO: Add protected routes based on token and role
   */
  return <Outlet />;
};

export default ProtectedRoutes;
