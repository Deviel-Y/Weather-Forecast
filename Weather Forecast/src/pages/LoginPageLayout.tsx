import { Outlet } from "react-router";

const LoginPageLayout = () => {
 return (
  <div className="h-screen w-full flex justify-center items-center">
   <Outlet />
  </div>
 );
};

export default LoginPageLayout;
