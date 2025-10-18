import { Box, useTheme } from "@mui/material";
import useLanguageStore from "../../../useLanguageStore";
import { getCurrentDate } from "../../../utils/getCurrentDate";

// This is component is meant to show current date in Current Weather Card
const CurrentDate = () => {
 const currentLang = useLanguageStore((s) => s.currentLang);
 const { gregorian, jalali } = getCurrentDate();

 const gregorianDateFormat = `${gregorian.dayOfTheMonth} ${gregorian.gregoryMonthInShort}, ${gregorian.year}`;
 const jalaliDateFormat = `${jalali.weekday} ${jalali.day} ${jalali.month} ${jalali.year}`;

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
   <p className="ltr:font-bold text-[32px]">
    {currentLang === "en" ? gregorian.weekday : jalali.weekday}
   </p>

   <div className="flex flex-row rtl:flex-row-reverse gap-x-5 text-sm">
    <p>{currentLang === "en" ? gregorianDateFormat : jalaliDateFormat}</p>

    <p>
     {currentLang === "en"
      ? gregorian.gregoryTimeIn12
      : jalali.jalaliTimeWithMeridiem}
    </p>
   </div>
  </Box>
 );
};

export default CurrentDate;
