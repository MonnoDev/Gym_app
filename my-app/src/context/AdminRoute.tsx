// components/AdminRoute.tsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LOGIN_ROUTE } from "../routes/const";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { isAdmin, loading } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? children : <Navigate to={LOGIN_ROUTE} replace />;
};

export default AdminRoute;
