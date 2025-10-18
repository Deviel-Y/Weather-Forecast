import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import HomePageError from "../pages/HomePageError";
import LoginPage from "../pages/Login";
import PrivateRoutes from "../PrivateRoutes";

const router = createBrowserRouter([
 {
  // Protect "/" route
  element: <PrivateRoutes />,
  errorElement: <HomePageError />,
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
