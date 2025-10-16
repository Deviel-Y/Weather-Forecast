export const toPersianDigits = (num: number | string) => {
 const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
 return String(num).replace(/\d/g, (digit) => persianDigits[Number(digit)]);
};
