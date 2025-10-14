import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import logoIcon from "../../assets/logo.png";
import cityList from "../../data/cityList.json";
import useCityQueryStore from "../../store";
import NavbarPopoverContent from "./NavbarPopoverContent";
import OptionPopoverButton from "./OptionPopoverButton";

const Navbar = () => {
 const setCityAttrebutes = useCityQueryStore((s) => s.setCityAttrebutes);

 return (
  <nav className="flex flex-row items-center justify-between px-6 py-3 bg-[#F3FAFE] h-20 shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
   <div className="flex flex-row items-center gap-2">
    <img src={logoIcon} alt="Website logo" />
    <p className="font-[400] text-[12px] text-[#003464]">Weather Dashboard</p>
   </div>

   <div className="flex flex-row items-center gap-2">
    <Autocomplete
     disablePortal
     defaultValue={cityList[0]}
     getOptionLabel={(option) => option.cityName}
     options={cityList}
     onChange={(_event, newValue) => {
      if (newValue?.latitude && newValue?.longitude)
       setCityAttrebutes(
        newValue?.latitude!,
        newValue?.longitude,
        newValue.cityName
       );
     }}
     sx={{ width: 300 }}
     size="small"
     renderInput={(params) => (
      <TextField {...params} label="Search Your Location" />
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
