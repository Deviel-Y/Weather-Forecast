import CardContainer from "../components/CardContainer";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import MonthlyTemperatureChart from "../components/dashboardComponents/monthlyAverageChart/MonthlyAverageWheatherDataChart";
import Navbar from "../components/navbarComponents/Navbar";
import useCurrentWeather from "../hooks/useWeatherData";
import useCityQueryStore from "../store";
import { getMonthlyAverageTemps } from "../utils/getMonthlyAverageTemps";
import {
 weatherCodeMapping,
 type WeatherCodeType,
} from "../utils/weatherCodeMapping";

const HomePage = () => {
 const { latitude, longitude, name } = useCityQueryStore(
  (state) => state.cityAttrebutes
 );

 const { currentWeather, monthlyWeather } = useCurrentWeather({
  latitude,
  longitude,
 });

 const monthlyAverageChartData = getMonthlyAverageTemps(
  monthlyWeather?.data ?? { daily: { temperature_2m_mean: [], time: [] } }
 );

 return (
  <div className="h-screen w-full flex flex-col">
   <Navbar />

   <div className="grid grid-cols-12 w-full gap-10 px-6 py-7">
    <CardContainer additionalStyles="flex flex-1 items-center justify-center col-span-5 px-6 pt-5 pb-[17px] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
     <CurrentWeatherCard
      cityName={name}
      weatherFigure={
       weatherCodeMapping[
        currentWeather?.data?.current?.weather_code as WeatherCodeType
       ]?.figure
      }
      tempraure={{
       currentTemp: currentWeather.data?.current.temperature_2m ?? 0,
       feelsLikeTemp: currentWeather.data?.current.apparent_temperature ?? 0,
       highTemp: currentWeather.data?.daily.temperature_2m_max[0] ?? 0,
       lowtemp: currentWeather.data?.daily.temperature_2m_min[0] ?? 0,
      }}
      weatherSituation={
       weatherCodeMapping[
        currentWeather.data?.current.weather_code as WeatherCodeType
       ]?.label
      }
     />
    </CardContainer>

    <CardContainer additionalStyles="flex flex-col gap-1 col-span-7 p-4">
     <p className="font-bold text-lg font-sans text-[#1B2767]">
      Average Monthly Temprature
     </p>

     <div className="w-full ps-8">
      <MonthlyTemperatureChart data={monthlyAverageChartData} />
     </div>
    </CardContainer>
   </div>
  </div>
 );
};

export default HomePage;
