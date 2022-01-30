import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (user) => {
  const isAuth = user.isLoggedIn;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;