import useLanguageStore from "../../../useLanguageStore";
import { getCurrentDate } from "../../../utils/getCurrentDate";

const CurrentDate = () => {
 const currentLang = useLanguageStore((s) => s.currentLang);
 const { gregorian, jalali } = getCurrentDate();

 const gregorianDateFormat = `${gregorian.dayOfTheMonth} ${gregorian.month}, ${gregorian.year}`;
 const jalaliDateFormat = `${jalali.weekday} ${jalali.day} ${jalali.month} ${jalali.year}`;

 return (
  <div className="flex flex-col text-[#003464]">
   <p className="font-[500] text-[32px]">
    {currentLang === "en" ? gregorian.weekday : jalali.weekday}
   </p>

   <div className="flex flex-row gap-x-5 font-sans text-sm">
    <p>{currentLang === "en" ? gregorianDateFormat : jalaliDateFormat}</p>

    <p>
     {currentLang === "en" ? gregorian.time : jalali.jalaliTimeWithMeridiem}
    </p>
   </div>
  </div>
 );
};

export default CurrentDate;
