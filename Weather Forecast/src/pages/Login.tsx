import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import LanguageSelectDropdown from "../components/loginComponents/LanguageSelectDropdown";
import LoginForm from "../components/loginComponents/loginForm";
import useLanguageStore from "../useLanguageStore";

const LoginPage = () => {
 const navigate = useNavigate();
 const currentDir = useLanguageStore((s) => s.dir);

 useEffect(() => {
  // So authenticated user won't be able to navigate to login page
  const userName = localStorage.getItem("name");

  if (userName) navigate("/");
 }, []);

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
   dir={currentDir}
   className="w-full h-screen flex flex-row justify-center items-center max-md:px-10"
  >
   <Box className="w-full h-full flex flex-col items-center justify-center gap-5 ">
    <LoginForm />
    <LanguageSelectDropdown />
   </Box>

   <Link
    to="https://github.com/Deviel-Y/Weather-Forecast"
    className="absolute bottom-3 right-3 cursor-pointer animate-bounce"
   >
    <FaGithub size={50} />
   </Link>
  </Box>
 );
};

export default LoginPage;
