import { useQueries } from "@tanstack/react-query";
import APIClientCurrentData from "../service/api-client-currentData";
import APIClientMonthlyData from "../service/api-client-monthlyData";

interface GetWeatherParams {
 latitude: number | null;
 longitude: number | null;
}

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

const useCurrentWeather = ({ latitude, longitude }: GetWeatherParams) => {
 const result = useQueries({
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

    enabled: latitude !== null && longitude !== null,
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

    enabled: latitude !== null && longitude !== null,
   },
  ],
 });

 const [currentWeather, monthlyWeather] = result;

 return {
  currentWeather,
  monthlyWeather,
 };
};

export default useCurrentWeather;
