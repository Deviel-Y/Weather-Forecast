import { useEffect } from "react";
import { useNavigate } from "react-router";
import LanguageSelectDropdown from "../components/loginComponents/LanguageSelectDropdown";
import LoginForm from "../components/loginComponents/loginForm";
import useLanguageStore from "../useLanguageStore";

const LoginPage = () => {
 const navigate = useNavigate();
 const currentDir = useLanguageStore((s) => s.dir);

 useEffect(() => {
  const userName = localStorage.getItem("name");

  if (userName) navigate("/");
 }, []);

 return (
  <div
   dir={currentDir}
   className="w-full h-screen flex flex-row justify-center items-center bg-[#F3FAFE] max-md:px-10"
  >
   <div className="w-full h-full flex flex-col items-center justify-center gap-5">
    <LoginForm />
    <LanguageSelectDropdown />
   </div>
  </div>
 );
};

export default LoginPage;
