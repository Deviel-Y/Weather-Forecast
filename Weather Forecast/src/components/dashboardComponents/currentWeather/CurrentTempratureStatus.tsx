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
 return (
  <div className="flex flex-col text-[#003464]">
   <p className="font-[500] text-[40px]">
    {currentLang === "en" ? currentTemp : toPersianDigits(currentTemp)}&#8451;
   </p>

   <div className="flex flex-row gap-x-1 font-sans text-sm -mt-2">
    <div className="w-fit flex gap-1 flex-row items-center">
     <p>{t("highTemp")}: </p>

     <p>{currentLang === "en" ? highTemp : toPersianDigits(highTemp)}</p>
    </div>

    <div className="w-fit flex gap-1 flex-row items-center">
     <p>{t("lowTemp")}:</p>

     <p>{currentLang === "en" ? lowTemp : toPersianDigits(lowTemp)}</p>
    </div>
   </div>
  </div>
 );
};

export default CurrentTempratureStatus;
