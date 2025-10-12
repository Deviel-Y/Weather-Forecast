import { createBrowserRouter } from "react-router";
import HomePageLayout from "../pages/HomePageLayout";
import LoginPage from "../pages/Login";
import PrivateRoutes from "../PrivateRoutes";

const router = createBrowserRouter([
 {
  element: <PrivateRoutes />,
  children: [
   {
    path: "/",
    element: <HomePageLayout />,
   },
  ],
 },
 { path: "/login", element: <LoginPage /> },
]);

export default router;
