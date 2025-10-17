import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import compnayLogo from "../../assets/images/companyLogo.png";
import useLanguageStore from "../../useLanguageStore";
import { getCurrentDate } from "../../utils/getCurrentDate";

const Footer = () => {
 const { gregorian, jalali } = getCurrentDate();
 const { t } = useTranslation();
 const dir = useLanguageStore((s) => s.dir);
 const {
  palette: {
   mode,
   customeBackground: { footerDark, footerLight, textDark, textLight },
  },
 } = useTheme();

 return (
  <footer dir={dir} className="ltr:font-sans">
   <Box
    sx={{
     background: mode === "dark" ? footerDark : footerLight,
     color: mode === "dark" ? textDark : textLight,
    }}
    className="flex flex-row items-center justify-between px-6 h-[106px]"
   >
    <div className="flex flex-row items-center gap-3">
     <img src={compnayLogo} alt="company Logo" />
     <p className="text-lg  rtl:text-sm">{t("footerCopyRight")}</p>
    </div>
    <div className="flex flex-row items-center gap-10 text-sm">
     <div className="flex flex-row items-center gap-3">
      <FaRegEnvelope size={19} />
      <p className="flex flex-row items-center gap-1">
       <span>{t("contactUs")} : </span>
       <span>info@nadin.ir</span>
      </p>
     </div>
     <div className="flex flex-row items-center gap-3">
      <MdOutlineCalendarMonth size={19} />
      <div>
       <span>{`${gregorian.gregoryTimeIn24} . `}</span>
       <span>{dir === "ltr" ? gregorian.weekday : jalali.weekday} </span>
       <span>{dir === "ltr" ? gregorian.dayOfTheMonth : jalali.day} </span>
       <span>
        {dir === "ltr" ? gregorian.gregoryMonthInLong : jalali.month}{" "}
       </span>
       <span>{dir === "ltr" ? gregorian.year : jalali.year} </span>
      </div>
     </div>
    </div>
   </Box>
  </footer>
 );
};

export default Footer;
