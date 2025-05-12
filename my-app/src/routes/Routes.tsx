import { Routes, Route } from "react-router-dom";
import { adminRoutes, clientRoutes } from "../routes/const";
import AdminRoute from "../context/AdminRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {clientRoutes.routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {adminRoutes.routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AdminRoute>
              <Component />
            </AdminRoute>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
