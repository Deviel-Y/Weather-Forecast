import type { CurrentWeatherResponseType } from "../hooks/useWeatherData";
import { weatherCodeMapping, type WeatherCodeType } from "./weatherCodeMapping";

interface Props {
 currentWeatherData: CurrentWeatherResponseType;
}
export const getCurrentWeatherProps = ({ currentWeatherData }: Props) => {
 const weatherFigure =
  weatherCodeMapping[
   currentWeatherData?.current?.weather_code as WeatherCodeType
  ]?.figure;
 const weatherLabel =
  weatherCodeMapping[
   currentWeatherData?.current?.weather_code as WeatherCodeType
  ]?.label;

 const currentWeatherTemperatureData = {
  currentTemp: currentWeatherData?.current.temperature_2m ?? 0,
  feelsLikeTemp: currentWeatherData?.current.apparent_temperature ?? 0,
  highTemp: currentWeatherData?.daily.temperature_2m_max[0] ?? 0,
  lowtemp: currentWeatherData?.daily.temperature_2m_min[0] ?? 0,
 };

 return {
  weatherFigure,
  weatherLabel,
  currentWeatherTemperatureData,
 };
};
