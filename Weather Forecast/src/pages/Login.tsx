import { useNavigate } from "react-router";
import LanguageSelectDropdown from "../components/loginComponents/LanguageSelectDropdown";
import LoginForm from "../components/loginComponents/loginForm";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("name");
    
    if (userName) navigate("/");
  }, []);

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center bg-[#F3FAFE]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <LoginForm />
        <LanguageSelectDropdown />
      </div>
    </div>
  );
};

export default LoginPage;
