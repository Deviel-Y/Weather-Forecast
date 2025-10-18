import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import useWeatherinfoStore from "../../../useLanguageStore";
import { toPersianDigits } from "../../../utils/changeNumberToPersian";

interface TempratureProps {
 currentTemp: number;
 highTemp: number;
 lowTemp: number;
}

const CurrentTempratureStatus = ({
 currentTemp,
 highTemp,
 lowTemp,
}: TempratureProps) => {
 const { t } = useTranslation();
 const currentLang = useWeatherinfoStore((s) => s.currentLang);
 const {
  palette: {
   mode,
   customeBackground: { textDark, textLight },
  },
 } = useTheme();

 return (
  <Box
   sx={{ color: mode === "dark" ? textDark : textLight }}
   className="flex flex-col text-[#003464]"
  >
   <p className="ltr:font-extrabold text-[40px] flex flex-row rtl:flex-row-reverse rtl:justify-end gap-3">
    <span className=" rtl:font-semibold">{currentTemp}</span>
    <span>&#8451;</span>
   </p>

   <div className="flex flex-row gap-x-1 text-sm -mt-2 rtl:gap-3">
    <div className="w-fit flex gap-1 flex-row items-center">
     <p>{t("highTemp")}: </p>

     <p>{currentLang === "en" ? highTemp : toPersianDigits(highTemp)}</p>
    </div>

    <div className="w-fit flex gap-1 flex-row items-center ">
     <p>{t("lowTemp")}:</p>

     <p>{currentLang === "en" ? lowTemp : toPersianDigits(lowTemp)}</p>
    </div>
   </div>
  </Box>
 );
};

export default CurrentTempratureStatus;
