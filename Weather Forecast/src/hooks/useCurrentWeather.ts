import { useQuery } from "@tanstack/react-query";
import APIClientCurrentData from "../service/api-client-currentData";

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

const useCurrentWeather = ({ latitude, longitude }: GetWeatherParams) => {
  return useQuery({
    queryKey: [latitude, longitude],
    queryFn: () => {
      const apiClient = new APIClientCurrentData<CurrentWeatherResponseType>(
        latitude!,
        longitude!
      );

      return apiClient.getCurrentData();
    },

    enabled: latitude !== null && longitude !== null,
  });
};

export default useCurrentWeather;
