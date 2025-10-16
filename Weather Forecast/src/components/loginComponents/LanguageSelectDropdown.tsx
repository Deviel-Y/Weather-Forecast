import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelectDropdown = () => {
 const savedLang = localStorage.getItem("lang");
 const { t, i18n } = useTranslation();

 useEffect(() => {
  i18n.changeLanguage(savedLang as "en" | "fa");
 }, [savedLang]);

 return (
  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
   <InputLabel id="demo-simple-select-standard-label">
    {t("languageSelectDropdownPlaceholder")}
   </InputLabel>
   <Select
    onChange={(event) => {
     i18n.changeLanguage(event.target.value);
     localStorage.setItem("lang", event.target.value);
    }}
    defaultValue={savedLang as "en" | "fa"}
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
   >
    {languages.map((lang) => (
     <MenuItem value={lang.value}>{lang.label}</MenuItem>
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
