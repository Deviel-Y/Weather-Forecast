import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomePageLayout = () => {
 return (
  <div className="h-screen w-full flex flex-col">
   <Navbar />

   <Outlet />
  </div>
 );
};

export default HomePageLayout;
