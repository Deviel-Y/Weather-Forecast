import { Box, Typography, useTheme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import logoIcon from "../../assets/images/navbarLogo.png";
import cityList from "../../data/cityList.json";
import useLanguageStore from "../../useLanguageStore";
import useCityQueryStore from "../../useWeatherinfoStore";
import NavbarPopoverContent from "./NavbarPopoverContent";
import OptionPopoverButton from "./OptionPopoverButton";

const Navbar = () => {
 const setCityAttrebutes = useCityQueryStore((s) => s.setCityAttrebutes);
 const { t } = useTranslation();
 const dir = useLanguageStore((s) => s.dir);
 const {
  palette: {
   mode,
   customeBackground: { textDark, textLight, navbarDark, navbarLight },
  },
 } = useTheme();

 return (
  <nav dir={dir} className="!font-[family-name:var(--font-iran-yekan-reg)]">
   <Box
    sx={{
     background: mode === "light" ? navbarLight : navbarDark,
     boxShadow: "0 4px 10px 0 rgba(0,0,0,0.15)",
     direction: dir,
    }}
    className="flex flex-row items-center rtl:!flex-row-reverse justify-between px-6 py-3 h-20"
   >
    <div dir={dir} className="flex font-sans flex-row items-center gap-2">
     <img src={logoIcon} alt="Website logo" />
     <Typography
      sx={{
       color: mode === "light" ? textLight : textDark,
       fontFamily: "font-[family-name:var(--font-iran-yekan-reg)]",
      }}
      className="font-[400] text-[12px] "
     >
      {t("weatherDashboard")}
     </Typography>
    </div>
    <div className="flex rtl:!flex-row-reverse flex-row items-center gap-2 ">
     <Autocomplete
      sx={{ fontFamily: "var(--font-iran-yekan-reg)" }}
      dir={dir}
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
        sx={{
         // Apply font family to the actual input element
         "& .MuiInputBase-input": {
          fontFamily: "var(--font-iran-yekan-reg)",
         },
         // Apply font family to the label
         "& .MuiInputLabel-root": {
          fontFamily: "var(--font-iran-yekan-reg)",
         },
         // Apply font family to the helper text if present
         "& .MuiFormHelperText-root": {
          fontFamily: "var(--font-iran-yekan-reg)",
         },
        }}
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
  </nav>
 );
};

export default Navbar;
