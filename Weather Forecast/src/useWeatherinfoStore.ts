import { create } from "zustand";

interface WeatherinfoStoreType {
 cityAttrebutes: {
  name: string;
  latitude: number;
  longitude: number;
 };
 setCityAttrebutes: (latitude: number, longitude: number, name: string) => void;
}

const useWeatherinfoStore = create<WeatherinfoStoreType>((set) => ({
 cityAttrebutes: { latitude: 0, longitude: 0, name: "" },
 setCityAttrebutes: (latitude, longitude, name) =>
  set(() => ({ cityAttrebutes: { latitude, longitude, name } })),
}));

export default useWeatherinfoStore;
