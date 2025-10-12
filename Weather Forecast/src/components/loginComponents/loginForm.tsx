import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import loginPagePicture from "../../assets/loginPagePicture.png";

const LoginForm = () => {
 const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState<boolean>(false);

 return (
  <div className="flex flex-row w-[960px] h-[560px] bg-white rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
   <div className=" flex flex-col items-center flex-1 w-[506px]">
    {/* Login Form Side Container */}
    <form className="flex flex-col items-center justify-between px-[60px] w-full h-full py-28">
     <div className=" w-full gap-8 flex flex-col items-center">
      <h1 className="font-bold text-2xl">Login</h1>
      <TextField className="w-full" required placeholder="Enter Your Name" />
     </div>

     <Button
      className="w-full h-11"
      loadingPosition="end"
      loading={isLoading}
      variant="contained"
      onClick={() => {
       setIsLoading(true);
       localStorage.setItem("name", "Daniel");

       setTimeout(() => {
        navigate("/");
       }, 3000);
      }}
     >
      Login
     </Button>
    </form>
   </div>

   <div className="flex justify-center items-center flex-1 bg-[#D3E1E7]">
    <div className="flex flex-col pr-11 pl-9 pt-14 pb-[60px]">
     <img className="scale-110" src={loginPagePicture} alt="loginPagePicture" />
    </div>
   </div>
  </div>
 );
};

export default LoginForm;
