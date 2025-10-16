import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import compnayLogo from "../../assets/companyLogo.png";
import { getCurrentDate } from "../../utils/getCurrentDate";

const Footer = () => {
 const { gregorian } = getCurrentDate();
 return (
  <footer className="flex flex-row items-center justify-between px-6 h-[106px] bg-gradient-to-r from-[#F3FAFE] via-[#CCDDDD9E] to-[#F3FAFE]">
   <div className="flex flex-row items-center gap-3">
    <img src={compnayLogo} alt="company Logo" />

    <p className="text-lg text-[#003464]">
     All rights of this site are reserved for Nadin Sadr Aria Engineering
     Company.
    </p>
   </div>

   <div className="flex flex-row items-center gap-10 text-sm">
    <div className="flex flex-row items-center gap-3">
     <FaRegEnvelope size={19} />

     <p>contact us : info@nadin.ir</p>
    </div>

    <div className="flex flex-row items-center gap-3">
     <MdOutlineCalendarMonth size={19} />

     <div>
      <span>{`${gregorian.gregoryTimeIn24} . `}</span>
      <span>{gregorian.weekday} </span>
      <span>{gregorian.dayOfTheMonth} </span>
      <span>{gregorian.year} </span>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
