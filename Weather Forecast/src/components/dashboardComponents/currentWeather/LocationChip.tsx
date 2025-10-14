import { IoLocation } from "react-icons/io5";

const LocationChip = ({ cityName }: { cityName: string }) => {
  return (
    <div className="h-10 rounded-[50px] w-fit ps-2.5 pe-6 gap-3.5 bg-[#CDD9E0] py-2.5 flex flex-row items-center ">
      <IoLocation size={20} fill="#3D4852" />

      <p className="font-sans text-[#3D4852] font-[500]">{cityName}</p>
    </div>
  );
};

export default LocationChip;
