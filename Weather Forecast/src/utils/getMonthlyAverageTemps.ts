import moment from "moment-jalaali";
import type { WeatherDataType } from "../hooks/useWeatherData";
import type { LanguageType } from "../i18n";

export interface MonthlyAverage {
 monthName: string;
 averageTemp: number;
}

export const getMonthlyAverageTemps = (
 data: WeatherDataType,
 translatedMonthNames: string[],
 lang: LanguageType
): MonthlyAverage[] => {
 const monthlyMapping = new Map<number, number[]>();

 data.daily.time.forEach((timeData, index) => {
  let monthIndex: number;
  if (lang === "fa") {
   const jMonth = moment(timeData).jMonth(); // 0–11
   monthIndex = jMonth;
  } else {
   monthIndex = new Date(timeData).getMonth(); // 0–11
  }

  const temperature = data.daily.temperature_2m_mean[index];
  if (!monthlyMapping.has(monthIndex)) monthlyMapping.set(monthIndex, []);
  monthlyMapping.get(monthIndex)?.push(temperature);
 });

 return Array.from(monthlyMapping).map(([monthIndex, temperatures]) => {
  const averageTemp =
   temperatures.reduce((acc, sum) => acc + sum, 0) / temperatures.length || 1;

  return {
   monthName: translatedMonthNames[monthIndex],
   averageTemp: parseFloat(averageTemp.toFixed(1)),
  };
 });
};
