import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import PrivateRoutes from "../PrivateRoutes";

const router = createBrowserRouter([
 {
  element: <PrivateRoutes />,
  children: [
   {
    path: "/",
    element: <Dashboard />,
   },
  ],
 },
 { path: "/login", element: <LoginPage /> },
]);

export default router;
