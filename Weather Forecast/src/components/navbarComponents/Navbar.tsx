import { Box, Typography, useTheme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/navbarLogo.png";
import cityList from "../../data/cityList.json";
import useCityQueryStore from "../../useWeatherinfoStore";
import NavbarPopoverContent from "./NavbarPopoverContent";
import OptionPopoverButton from "./OptionPopoverButton";

const Navbar = () => {
 const setCityAttrebutes = useCityQueryStore((s) => s.setCityAttrebutes);
 const { t } = useTranslation();
 const {
  palette: {
   mode,
   customeBackground: { textDark, textLight, navbarDark, navbarLight },
  },
 } = useTheme();

 return (
  <Box
   sx={{
    background: mode === "light" ? navbarLight : navbarDark,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,0.15)",
   }}
   className="flex flex-row items-center justify-between px-6 py-3 h-20"
  >
   <div className="flex flex-row items-center gap-2">
    <img src={logoIcon} alt="Website logo" />
    <Typography
     sx={{
      color: mode === "light" ? textLight : textDark,
     }}
     className="font-[400] text-[12px]"
    >
     {t("weatherDashboard")}
    </Typography>
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
  </Box>
 );
};

export default Navbar;
