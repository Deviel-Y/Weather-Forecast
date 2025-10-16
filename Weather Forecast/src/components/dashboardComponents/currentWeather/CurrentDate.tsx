import useLanguageStore from "../../../useLanguageStore";
import { getCurrentDate } from "../../../utils/getCurrentDate";

const CurrentDate = () => {
 const currentLang = useLanguageStore((s) => s.currentLang);
 const { gregorian, jalali } = getCurrentDate();

 const gregorianDateFormat = `${gregorian.dayOfTheMonth} ${gregorian.gregoryMonthInShort}, ${gregorian.year}`;
 const jalaliDateFormat = `${jalali.weekday} ${jalali.day} ${jalali.month} ${jalali.year}`;

 return (
  <div className="flex flex-col text-[#003464]">
   <p className="font-[500] text-[32px]">
    {currentLang === "en" ? gregorian.weekday : jalali.weekday}
   </p>

   <div className="flex flex-row rtl:flex-row-reverse gap-x-5 font-sans text-sm">
    <p>{currentLang === "en" ? gregorianDateFormat : jalaliDateFormat}</p>

    <p>
     {currentLang === "en"
      ? gregorian.gregoryTimeIn12
      : jalali.jalaliTimeWithMeridiem}
    </p>
   </div>
  </div>
 );
};

export default CurrentDate;
