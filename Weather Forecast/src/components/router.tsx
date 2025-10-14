import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";
import PrivateRoutes from "../PrivateRoutes";

const router = createBrowserRouter([
 {
  element: <PrivateRoutes />,
  children: [
   {
    path: "/",
    element: <HomePage />,
   },
  ],
 },
 { path: "/login", element: <LoginPage /> },
]);

export default router;
