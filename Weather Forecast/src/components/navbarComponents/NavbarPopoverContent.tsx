import { Box, Button, ButtonGroup, Divider, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HiOutlineMoon } from "react-icons/hi2";
import { LiaSun } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router";
import {
 default as useLanguageStore,
 default as useWeatherinfoStore,
} from "../../useLanguageStore";
import useThemeStore from "../../useThemeStore";

const NavbarPopoverContent = () => {
 const currentLangStore = useWeatherinfoStore((s) => s.currentLang);
 const setCurrentLangStore = useWeatherinfoStore((s) => s.setCurrentLang);
 const setDir = useLanguageStore((s) => s.setDir);

 const navigate = useNavigate();
 const { t, i18n } = useTranslation();
 const { setTheme } = useThemeStore();
 const {
  palette: {
   mode,
   customeBackground: {
    weeklyWeatherCardDark,
    weeklyWeatherCardLight,
    textDark,
    textLight,
   },
  },
 } = useTheme();

 return (
  <Box
   sx={{
    background: mode === "dark" ? weeklyWeatherCardDark : "#FFFFFF",
   }}
   className="w-56 h-60 rounded-lg px-4 py-3"
  >
   <div className="flex flex-col items-stretch gap-3 w-full">
    <div className="flex flex-col items-start gap-1.5">
     <p className="font-[400]">{t("navbarPopoverTheme")}</p>

     <ButtonGroup variant="outlined" size="small" fullWidth>
      <Button
       sx={{
        borderColor: mode === "light" ? "#2196F3" : "#8895A0",
        color: mode === "light" ? "#2196F3" : "#8895A0",
       }}
       onClick={() => setTheme("light")}
       startIcon={<LiaSun />}
      >
       {t("theme.light")}
      </Button>
      <Button
       sx={{
        borderColor: mode === "dark" ? "#2196F3" : "#8895A0",
        color: mode === "dark" ? "#2196F3" : "#8895A0",
       }}
       onClick={() => setTheme("dark")}
       startIcon={<HiOutlineMoon size={15} />}
      >
       {t("theme.dark")}
      </Button>
     </ButtonGroup>
    </div>

    <Divider className="mt-1" />

    <div className="flex flex-col items-start gap-1.5">
     <p className="font-[400]">{t("navbarPopoverLangugeHeading")}</p>

     <ButtonGroup variant="outlined" size="small" fullWidth>
      <Button
       onClick={() => {
        i18n.changeLanguage("en");
        localStorage.setItem("lang", "en");
        localStorage.setItem("dir", "ltr");
        document.documentElement.dir = "ltr";
        setCurrentLangStore("en");
        setDir("ltr");
       }}
       className={`${
        currentLangStore !== "en"
         ? "!border-gray-400 !text-gray-400"
         : "!border-[#2196F3] !text-[#2196F3]"
       }`}
      >
       EN
      </Button>

      <Button
       onClick={() => {
        i18n.changeLanguage("fa");
        localStorage.setItem("lang", "fa");
        localStorage.setItem("dir", "rtl");
        document.documentElement.dir = "rtl";
        setCurrentLangStore("fa");
        setDir("rtl");
       }}
       className={`${
        currentLangStore !== "fa"
         ? "!border-gray-400 !text-gray-400"
         : "!border-[#2196F3] !text-[#2196F3]"
       }`}
      >
       Fa
      </Button>
     </ButtonGroup>
    </div>

    <Divider className="mt-1" />

    <Button
     sx={{ color: mode === "light" ? textLight : textDark }}
     onClick={() => {
      localStorage.removeItem("name");
      navigate("/login");
     }}
     variant="text"
     className="!self-start hover:!bg-transparent !mt-2.5"
     startIcon={<RxExit size={20} />}
    >
     {t("navbarPopoverLogout")}
    </Button>
   </div>
  </Box>
 );
};

export default NavbarPopoverContent;
