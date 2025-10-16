import { Button, ButtonGroup, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HiOutlineMoon } from "react-icons/hi2";
import { LiaSun } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router";
import useWeatherinfoStore from "../../useLanguageStore";

const NavbarPopoverContent = () => {
 const currentLangStore = useWeatherinfoStore((s) => s.currentLang);
 const setCurrentLangStore = useWeatherinfoStore((s) => s.setCurrentLang);

 const navigate = useNavigate();
 const { t, i18n } = useTranslation();

 return (
  <div className="w-56 h-60 rounded-lg px-4 py-3">
   <div className="flex flex-col items-stretch gap-3 w-full">
    <div className="flex flex-col items-start gap-1.5">
     <p className="font-[400]">{t("navbarPopoverTheme")}</p>

     <ButtonGroup variant="outlined" size="small" fullWidth>
      <Button
       startIcon={<LiaSun />}
       className="!border-gray-400 !text-gray-400"
      >
       {t("theme.light")}
      </Button>
      <Button
       startIcon={<HiOutlineMoon size={15} />}
       className="!border-gray-400 !text-gray-400"
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

        setCurrentLangStore("en");
       }}
       className={`${
        currentLangStore !== "en" ? "!border-gray-400 !text-gray-400" : ""
       }`}
      >
       EN
      </Button>

      <Button
       onClick={() => {
        i18n.changeLanguage("fa");
        localStorage.setItem("lang", "fa");
        setCurrentLangStore("fa");
       }}
       className={`${
        currentLangStore !== "fa" ? "!border-gray-400 !text-gray-400" : ""
       }`}
      >
       Fa
      </Button>
     </ButtonGroup>
    </div>

    <Divider className="mt-1" />

    <Button
     onClick={() => {
      localStorage.removeItem("name");
      navigate("/login");
     }}
     variant="text"
     className="!text-black self-start hover:!bg-transparent !mt-2.5"
     startIcon={<RxExit size={20} />}
    >
     {t("navbarPopoverLogout")}
    </Button>
   </div>
  </div>
 );
};

export default NavbarPopoverContent;
