import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import MonthlyTemperatureChart from "../components/dashboardComponents/monthlyAverageChart/MonthlyAverageWheatherDataChart.tsx";
import TwoWeekWeatherData from "../components/dashboardComponents/weeklyWeatcher/TwoWeekWeatherData.tsx";
import cityList from "../data/cityList.json";
import useCurrentWeather from "../hooks/useWeatherData";
import useLanguageStore from "../useLanguageStore.ts";
import useCityQueryStore from "../useWeatherinfoStore.ts";
import { getCurrentWeatherProps } from "../utils/getCurrentWeatherProps.ts";
import { getMonthlyAverageTemps } from "../utils/getMonthlyAverageTemps";
import { getWeeklyWeatherData } from "../utils/getWeeklyWeatherData.ts";

const HomePage = () => {
 const { t } = useTranslation();
 const { currentWeather, monthlyWeather, weeklyWeather } = useCurrentWeather();
 const currentLang = useLanguageStore((s) => s.currentLang);
 const currentDir = useLanguageStore((s) => s.dir);
 const { currentWeatherTemperatureData, weatherFigure, weatherLabel } =
  getCurrentWeatherProps({ currentWeatherData: currentWeather.data! });

 const setCityAttrebutes = useCityQueryStore(
  (state) => state.setCityAttrebutes
 );

 useEffect(() => {
  setCityAttrebutes(
   cityList[0].latitude,
   cityList[0].longitude,
   cityList[0].cityName
  );
 }, [setCityAttrebutes]);

 const weeklyWeatherData = getWeeklyWeatherData(
  weeklyWeather.data ?? {
   daily: { time: [], weather_code: [] },
   hourly: { temperature_2m: [], time: [] },
  }
 );

 const translatedMonths = t("months", { returnObjects: true });
 const monthlyAverageChartData = getMonthlyAverageTemps(
  monthlyWeather?.data ?? { daily: { temperature_2m_mean: [], time: [] } },
  translatedMonths as Array<string>,
  currentLang
 );

 return (
  <div dir={currentDir} className="h-screen w-full flex flex-col">
   <div className="px-6 py-7 max-sm:p-3 flex flex-col gap-6 max-sm:gap-3">
    <div className="grid grid-cols-12 max-[769px]:flex max-[769px]:flex-col w-full gap-10 max-sm:gap-3">
     <CurrentWeatherCard
      cityName={currentWeather.cityName}
      weatherFigure={weatherFigure}
      tempraure={currentWeatherTemperatureData}
      weatherSituation={weatherLabel}
     />

     <MonthlyTemperatureChart data={monthlyAverageChartData} />
    </div>

    <TwoWeekWeatherData weeklyWeatherData={weeklyWeatherData} />
   </div>
  </div>
 );
};

export default HomePage;
