import { addDays } from "date-fns";
import type { WeeklyDataType } from "../hooks/useWeatherData";

export type WeeklyDataOutput = {
 weatherCode: number;
 averageTemp: number;
 date: string;
}[];

export const getWeeklyWeatherData = (
 weeklyWeatherData: WeeklyDataType
): WeeklyDataOutput => {
 const weeklyMapping = new Map<number, number[]>();

 weeklyWeatherData.hourly.time.forEach((time, index) => {
  const dayNumber = addDays(
   new Date(),
   new Date().getDate() - new Date(time).getDate()
  ).getDate();
  const temperature = weeklyWeatherData.hourly.temperature_2m[index];

  if (!weeklyMapping.has(dayNumber)) weeklyMapping.set(dayNumber, []);
  weeklyMapping.get(dayNumber)?.push(temperature);
 });

 const dayTempKeyValueInArray = Array.from(weeklyMapping).map(
  ([dayNumber, temperature]) => {
   const averageTemp =
    temperature.reduce((acc, sum) => acc + sum, 0) / temperature.length;

   return {
    dayNumber,
    averageTemp: parseFloat(averageTemp.toFixed(1)),
   };
  }
 );

 return dayTempKeyValueInArray.map((dayTemp, index) => ({
  averageTemp: dayTemp.averageTemp,
  date: addDays(new Date(), index).toLocaleDateString("en-US", {
   weekday: "short",
  }),
  weatherCode: weeklyWeatherData.daily.weather_code[index],
 }));
};
