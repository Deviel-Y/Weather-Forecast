import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { LanguageType } from "../../i18n";
import useLanguageStore from "../../useLanguageStore";

const LanguageSelectDropdown = () => {
 const setDir = useLanguageStore((s) => s.setDir);
 const savedLang = localStorage.getItem("lang");
 const { t, i18n } = useTranslation();

 useEffect(() => {
  i18n.changeLanguage(savedLang as LanguageType);
 }, [savedLang]);

 return (
  <FormControl
   variant="standard"
   sx={{
    minWidth: 200,
   }}
  >
   <InputLabel id="demo-simple-select-standard-label">
    {t("languageSelectDropdownPlaceholder")}
   </InputLabel>

   <Select
    sx={{
     "& .MuiInputBase-input": {
      fontFamily: "var(--font-iran-yekan-reg)",
     },
     "& .MuiInputLabel-root": {
      fontFamily: "var(--font-iran-yekan-reg)",
     },
    }}
    onChange={(event) => {
     i18n.changeLanguage(event.target.value);
     localStorage.setItem("lang", event.target.value);
     localStorage.setItem("dir", event.target.value === "en" ? "ltr" : "rtl");
     setDir(event.target.value === "en" ? "ltr" : "rtl");
    }}
    defaultValue={savedLang as LanguageType}
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
   >
    {languages.map((lang) => (
     <MenuItem
      sx={{
       "& .MuiMenuItem-root": {
        fontFamily: "var(--font-iran-yekan-reg)",
       },
      }}
      key={lang.value}
      value={lang.value}
     >
      {lang.label}
     </MenuItem>
    ))}
   </Select>
  </FormControl>
 );
};

export default LanguageSelectDropdown;

const languages: { label: "English" | "فارسی"; value: string }[] = [
 { label: "English", value: "en" },
 { label: "فارسی", value: "fa" },
];
