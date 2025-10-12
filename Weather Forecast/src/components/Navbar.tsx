import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import logoIcon from "../assets/logo.png";
import cityList from "../data/cityList.json";

const Navbar = () => {
 return (
  <nav className="flex flex-row items-center justify-between px-6 py-3 bg-[#F3FAFE] h-20 shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
   <div className="flex flex-row items-center gap-2">
    <img src={logoIcon} alt="Website logo" />
    <p className="font-[400] text-[12px] text-[#003464]">Weather Dashboard</p>
   </div>

   <div className="flex flex-row items-center gap-2">
    <Autocomplete
     disablePortal
     options={cityList}
     onChange={(_event, newValue) => console.log(newValue)}
     sx={{ width: 300 }}
     renderInput={(params) => (
      <TextField {...params} label="Search Your Location" />
     )}
    />
   </div>
  </nav>
 );
};

export default Navbar;
