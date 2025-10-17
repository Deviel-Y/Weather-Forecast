import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
 loginSchema,
 type LoginSchemaType,
} from "../../utils/validationSchema";

import img1 from "../../assets/Moon-cloud-fast-wind.png";
import img2 from "../../assets/Moon-cloud-mid-rain.png";
import img3 from "../../assets/Sun-cloud-angled-rain.png";

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

 const {
  palette: {
   mode,
   customeBackground: {
    loginFormBackgroundDark,
    loginFormBackgroundLight,
    loginFigureBackgroundDark,
    loginFigureBackgroundLight,
   },
  },
 } = useTheme();

 return (
  <Box
   sx={{
    background:
     mode === "dark" ? loginFigureBackgroundDark : loginFigureBackgroundLight,
   }}
   className="flex  flex-row w-[960px] max-md:w-full h-[560px] max-md:h-fit rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.25)]"
  >
   <Box
    sx={{
     background:
      mode === "dark" ? loginFormBackgroundDark : loginFormBackgroundLight,
    }}
    className=" flex flex-col items-center flex-1 w-[506px] max-md:w-full"
   >
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
      color="primary"
     >
      {t("loginSubmitButton")}
     </Button>
    </form>
   </Box>

   <Box className="flex flex-col h-fit flex-1 max-md:hidden relative ">
    <img src={img2} alt="img1" className="self-end top-16 right-10 absolute" />
    <img
     src={img3}
     alt="img3"
     className="self-start top-44 right-48 absolute"
    />
    <img src={img1} alt="img2" className="self-end top-80 right-10 absolute" />
   </Box>
  </Box>
 );
};

export default LoginForm;
