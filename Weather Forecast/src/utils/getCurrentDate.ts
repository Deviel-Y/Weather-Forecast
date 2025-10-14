export const getCurrentDate = () => {
 const now = new Date();

 const weekday = now.toLocaleString("en-US", {
  weekday: "long",
 });

 const time = now.toLocaleString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
 });

 const date = `${now.getDate()} ${now.toLocaleString("en-US", {
  month: "short",
 })}, ${now.getFullYear()}`;

 const dateInDashFormat = `${now.getFullYear()}-${
  now.getMonth() + 1
 }-${now.getDate()}`;

 const currentYear = now.getFullYear();

 return { weekday, time, date, dateInDashFormat, currentYear };
};
