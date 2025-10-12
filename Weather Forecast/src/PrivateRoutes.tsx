import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
 const user = localStorage.getItem("name");
 if (!user) return <Navigate to="/login" />;

 return <Outlet />;
};

export default PrivateRoutes;
