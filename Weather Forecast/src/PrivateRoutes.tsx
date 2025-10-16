import { Navigate, Outlet } from "react-router";
import Footer from "./components/footerComponents/Footer";
import Navbar from "./components/navbarComponents/Navbar";

const PrivateRoutes = () => {
 const user = localStorage.getItem("name");
 if (!user) return <Navigate to="/login" />;

 return (
  <>
   <Navbar />

   <Outlet />

   <Footer />
  </>
 );
};

export default PrivateRoutes;
