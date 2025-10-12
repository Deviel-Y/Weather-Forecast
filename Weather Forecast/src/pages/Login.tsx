import LanguageSelectDropdown from "../components/loginComponents/LanguageSelectDropdown";
import LoginForm from "../components/loginComponents/loginForm";

const LoginPage = () => {
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
