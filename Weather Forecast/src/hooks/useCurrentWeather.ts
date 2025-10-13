import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";

interface GetWeatherParams {
 latitude: number | null;
 longitude: number | null;
}

const useCurrentWeather = ({ latitude, longitude }: GetWeatherParams) => {
 return useQuery({
  queryKey: [latitude, longitude],
  queryFn: () => {
   const apiClient = new APIClient(latitude!, longitude!);

   return apiClient.get();
  },

  enabled: latitude !== null && longitude !== null,
 });
};

export default useCurrentWeather;
