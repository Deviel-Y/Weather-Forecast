import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/logo.png";
import cityList from "../../data/cityList.json";
import useCityQueryStore from "../../store";
import NavbarPopoverContent from "./NavbarPopoverContent";
import OptionPopoverButton from "./OptionPopoverButton";

const Navbar = () => {
 const setCityAttrebutes = useCityQueryStore((s) => s.setCityAttrebutes);
 const currentLanguageSelected = localStorage.getItem("lang");
 const { t, i18n } = useTranslation();

 useEffect(() => {
  i18n.changeLanguage(currentLanguageSelected as "en" | "faS");
 }, [currentLanguageSelected]);

 return (
  <nav className="flex flex-row items-center justify-between px-6 py-3 bg-[#F3FAFE] h-20 shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
   <div className="flex flex-row items-center gap-2">
    <img src={logoIcon} alt="Website logo" />
    <p className="font-[400] text-[12px] text-[#003464]">
     {t("weatherDashboard")}
    </p>
   </div>

   <div className="flex flex-row items-center gap-2 w6">
    <Autocomplete
     disablePortal
     defaultValue={cityList[0]}
     getOptionLabel={(option) => t(`cities.${option.cityName}`)}
     options={cityList}
     onChange={(_event, newValue) => {
      if (newValue?.latitude && newValue?.longitude)
       setCityAttrebutes(
        newValue?.latitude!,
        newValue?.longitude,
        newValue.cityName
       );
     }}
     size="small"
     renderInput={(params) => (
      <TextField
       className="!w-64 max-sm:!w-40"
       {...params}
       label={t("searchYourLocation")}
      />
     )}
    />

    <OptionPopoverButton>
     <NavbarPopoverContent />
    </OptionPopoverButton>
   </div>
  </nav>
 );
};

export default Navbar;
