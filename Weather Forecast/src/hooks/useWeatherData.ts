import { useQueries } from "@tanstack/react-query";
import APIClientCurrentData from "../service/api-client-currentData";
import APIClientMonthlyData from "../service/api-client-periodData";
import APIClientWeeklyData from "../service/api-client-WeeklyData";
import useWeatherinfoStore from "../useWeatherinfoStore";

export interface CurrentWeatherResponseType {
 current: {
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
 };
 daily: {
  temperature_2m_max: [number];
  temperature_2m_min: [number];
 };
}

export interface WeatherDataType {
 daily: {
  time: string[];
  temperature_2m_mean: number[];
 };
}

export interface WeeklyDataType {
 daily: {
  time: string[];
  weather_code: number[];
 };

 hourly: {
  time: string[];
  temperature_2m: number[];
 };
}

const useCurrentWeather = () => {
 const now = new Date();
 const { latitude, longitude, name } = useWeatherinfoStore(
  (state) => state.cityAttrebutes
 );

 const [currentWeather, monthlyWeather, weeklyWeather] = useQueries({
  queries: [
   {
    queryKey: [latitude, longitude, "current"],
    queryFn: () => {
     const apiClient = new APIClientCurrentData<CurrentWeatherResponseType>(
      latitude!,
      longitude!
     );

     return apiClient.getCurrentData();
    },

    enabled: !!latitude && !!longitude,
   },

   {
    queryKey: [latitude, longitude, "monthly"],
    queryFn: () => {
     const apiClient = new APIClientMonthlyData<WeatherDataType>(
      latitude!,
      longitude!,
      `${now.getFullYear()}-01-01`,
      `${now.getFullYear}-${now.getMonth()}-${now.getDate()}`
     );

     return apiClient.getMonthlyData();
    },

    enabled: !!latitude && !!longitude,
   },

   {
    queryKey: [latitude, longitude, "weekly"],
    queryFn: () => {
     const apiClient = new APIClientWeeklyData<WeeklyDataType>(
      latitude!,
      longitude!
     );

     return apiClient.getWeeklyData();
    },

    enabled: !!latitude && !!longitude,
   },
  ],
 });

 return {
  currentWeather: { cityName: name, ...currentWeather },
  monthlyWeather,
  weeklyWeather,
 };
};

export default useCurrentWeather;
