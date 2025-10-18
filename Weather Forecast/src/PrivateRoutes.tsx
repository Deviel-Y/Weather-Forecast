import { Box, useTheme } from "@mui/material";
import { Navigate, Outlet } from "react-router";
import Footer from "./components/footerComponents/Footer";
import Navbar from "./components/navbarComponents/Navbar";

const PrivateRoutes = () => {
 // In real apps we use "session" and "token" instead of localStorge to authorize user
 const user = localStorage.getItem("name");
 if (!user) return <Navigate to="/login" />;

 const {
  palette: {
   mode,
   customeBackground: { mainBackgroundDark, mainBackgroundLight },
  },
 } = useTheme();

 return (
  <Box
   sx={{
    background: mode === "dark" ? mainBackgroundDark : mainBackgroundLight,
   }}
  >
   <Navbar />

   <Outlet />

   <Footer />
  </Box>
 );
};

export default PrivateRoutes;
