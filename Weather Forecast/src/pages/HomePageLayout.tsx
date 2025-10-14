import CardContainer from "../components/CardContainer";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import MonthlyTemperatureChart from "../components/dashboardComponents/monthlyAverageChart/MonthlyAverageWheatherDataChart";
import Navbar from "../components/navbarComponents/Navbar";
import useCurrentWeather from "../hooks/useWeatherData";
import useCityQueryStore from "../store";
import { getMonthlyAverageTemps } from "../utils/getMonthlyAverageTemps";

const HomePageLayout = () => {
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
  <div className="h-screen w-full flex flex-col gap-7">
   <Navbar />

   <div className="grid grid-cols-12 w-full gap-10">
    <CardContainer additionalStyles="flex flex-1 items-center justify-center col-span-5">
     <CurrentWeatherCard
      cityName={name}
      weatherCode={currentWeather.data?.current.weather_code ?? 0}
      tempraure={{
       currentTemp: currentWeather.data?.current.temperature_2m ?? 0,
       feelsLikeTemp: currentWeather.data?.current.apparent_temperature ?? 0,
       highTemp: currentWeather.data?.daily.temperature_2m_max[0] ?? 0,
       lowtemp: currentWeather.data?.daily.temperature_2m_min[0] ?? 0,
      }}
      weatherSituation="cloudy"
     />
    </CardContainer>

    <CardContainer additionalStyles="flex flex-col col-span-7">
     <p className="font-bold text-lg font-sans text-[#1B2767]">
      Average Monthly Temprature
     </p>

     <MonthlyTemperatureChart data={monthlyAverageChartData} />
    </CardContainer>
   </div>
  </div>
 );
};

export default HomePageLayout;
