import { lazy, Suspense, useEffect, useRef, useState } from "react";
import CardContainer from "../components/CardContainer";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import Navbar from "../components/navbarComponents/Navbar";
import useCurrentWeather from "../hooks/useWeatherData";
import useCityQueryStore from "../store";
import { getMonthlyAverageTemps } from "../utils/getMonthlyAverageTemps";
import {
  weatherCodeMapping,
  type WeatherCodeType,
} from "../utils/weatherCodeMapping";
import SingleWeatherCard from "../components/dashboardComponents/weeklyWeatcher/SingleWeatherCard.tsx";
import { motion } from "motion/react";

const HomePage = () => {
  const MonthlyTemperatureChart = lazy(
    () =>
      import(
        "../components/dashboardComponents/monthlyAverageChart/MonthlyAverageWheatherDataChart.tsx"
      )
  );

  const constraintsRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const offsetWidth = scrollRef.current.offsetWidth;
      setDragWidth(scrollWidth - offsetWidth);
    }
  }, []);

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

      <div className="px-6 py-7 flex flex-col gap-6">
        <div className="grid grid-cols-12 w-full gap-10">
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
                feelsLikeTemp:
                  currentWeather.data?.current.apparent_temperature ?? 0,
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

            <Suspense fallback={<p>Loading Chart...</p>}>
              <div className="w-full ps-8">
                <MonthlyTemperatureChart data={monthlyAverageChartData} />
              </div>
            </Suspense>
          </CardContainer>
        </div>

        <CardContainer additionalStyles="flex overflow-hidden select-none no-scrollbar flex-col px-[28px] pb-[26px] pt-[30px] gap-5 items-center justify-center">
          <p className="font-bold font-sans self-start text-[#1B2767] text-2xl">
            2 weeks Forecast
          </p>

          <motion.div className="w-full overflow-hidden" ref={constraintsRef}>
            <motion.div
              ref={scrollRef}
              drag="x"
              dragConstraints={{ left: -dragWidth, right: 0 }}
              dragElastic={0.2}
              className="
              flex flex-row justify-start gap-[18px]
              w-full snap-x snap-mandatory
              cursor-grab active:cursor-grabbing select-none
            "
            >
              {[...Array(14)].map((_, index) => (
                <div key={index} className="snap-start shrink-0">
                  <SingleWeatherCard
                    date={index.toString()}
                    figure={
                      weatherCodeMapping[
                        currentWeather.data?.current
                          .weather_code as WeatherCodeType
                      ]?.figure
                    }
                    temperature={20}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </CardContainer>
      </div>
    </div>
  );
};

export default HomePage;
