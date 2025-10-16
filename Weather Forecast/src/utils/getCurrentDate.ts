import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export const getCurrentDate = () => {
 const date = new Date();

 // --- Gregorian (short) ---
 const gregoryDay = date.getDate();
 const gregoryWeekday = date.toLocaleDateString("en-US", { weekday: "long" });
 const gregoryMonth = date.toLocaleString("en-US", { month: "short" });
 const gregoryYear = date.getFullYear();
 const gregoryTime = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
 });

 // --- Jalali ---
 const jNow = moment(date);
 const jalaliWeekday = jNow.format("dddd"); // شنبه, یک‌شنبه ...
 const jalaliDay = jNow.format("D"); // day of month
 const jalaliMonth = jNow.format("jMMM"); // دی, بهمن ...
 const jalaliYear = jNow.format("jYYYY"); // 1402

 // 12-hour time for Jalali (using moment)
 const jalaliTime = jNow.format("hh:mm");
 const jalaliMeridiem = jNow.format("A") === "AM" ? "صبح" : "عصر";
 const jalaliTimeWithMeridiem = `${jalaliTime} ${jalaliMeridiem}`;

 return {
  gregorian: {
   dayOfTheMonth: gregoryDay,
   month: gregoryMonth,
   year: gregoryYear,
   weekday: gregoryWeekday,
   time: gregoryTime,
  },
  jalali: {
   weekday: jalaliWeekday,
   day: jalaliDay,
   month: jalaliMonth,
   year: jalaliYear,
   time: jalaliTime,
   jalaliTimeWithMeridiem,
  },
 };
};
