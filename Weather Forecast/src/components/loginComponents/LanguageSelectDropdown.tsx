import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const LanguageSelectDropdown = () => {
 return (
  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
   <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
   <Select
    defaultValue="en"
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
    label="Language"
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
