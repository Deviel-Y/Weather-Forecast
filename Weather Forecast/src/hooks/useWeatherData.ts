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

// My Favorite Part😊
// I used React-Query package to manage http requests
// this will cache incomming responses, retry automatically if something fail and will manage life-cycle-component HELL

// With this approach we also applied SRP (Single Resposibility Princple) AND ALSO this hook shouldn't be able to know anything about the URL endpoint

// With useQueries Hook we are able to send multiple request asynchronously

const useCurrentWeather = () => {
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
      longitude!
     );

     return apiClient.getMonthlyData();
    },

    enabled: !!latitude && !!longitude, // Will send the request whenever latitude and longitude are truthy
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
