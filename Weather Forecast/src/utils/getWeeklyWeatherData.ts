import { addDays } from "date-fns";
import type { WeeklyDataType } from "../hooks/useWeatherData";

export type WeeklyDataOutput = {
 weatherCode: number;
 averageTemp: number;
 date: string;
}[];

// This heavy calculation is meant to change the incomming respoonse type to what the chart component needs
// But in real scenario this should be done by DB or at least web server; NOT CLIENT
// This is why I love nextJS

// The API I used gives the monthly data in hours
// And another array for temp and another one for Weather codes. So by this way I had to change the structure of the incomming data
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
