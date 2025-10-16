import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import loginPagePicture from "../../assets/loginPagePicture.png";
import {
 loginSchema,
 type LoginSchemaType,
} from "../../utils/validationSchema";

const LoginForm = () => {
 const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState<boolean>(false);

 const { t } = useTranslation();

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<LoginSchemaType>({
  resolver: zodResolver(loginSchema),
 });

 return (
  <div className="flex flex-row w-[960px] max-md:w-full h-[560px] max-md:h-fit bg-white rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]">
   <div className=" flex flex-col items-center flex-1 w-[506px] max-md:w-full">
    {/* Login Form Side Container */}
    <form
     noValidate
     onSubmit={handleSubmit((data) => {
      setIsLoading(true);
      localStorage.setItem("name", data.name);

      setTimeout(() => {
       navigate("/");
      }, 3000);
     })}
     className="flex flex-col max-md:gap-32 items-center justify-between px-[60px] w-full h-full py-28 max-md:py-10"
    >
     <div className=" w-full gap-8 flex flex-col items-center">
      <h1 className="font-bold text-2xl">{t("loginTitle")}</h1>

      <TextField
       error={!!errors.name?.message}
       {...register("name")}
       className="w-full"
       required
       placeholder={t("loginInputLabel")}
       helperText={errors.name?.message}
      />
     </div>

     <Button
      type="submit"
      className="w-full h-11"
      loadingPosition="end"
      loading={isLoading}
      variant="contained"
     >
      {t("loginSubmitButton")}
     </Button>
    </form>
   </div>

   <div className="flex justify-center items-center flex-1 bg-[#D3E1E7] max-md:hidden">
    <div className="flex flex-col pr-11 pl-9 pt-14 pb-[60px]">
     <img className="scale-110" src={loginPagePicture} alt="loginPagePicture" />
    </div>
   </div>
  </div>
 );
};

export default LoginForm;
