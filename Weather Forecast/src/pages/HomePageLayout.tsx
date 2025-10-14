import Navbar from "../components/navbarComponents/Navbar";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import useCurrentWeather from "../hooks/useCurrentWeather";
import useCityQueryStore from "../store";
import CardContainer from "../components/CardContainer";
import MonthlyTemperatureChart from "../components/dashboardComponents/monthlyAverageChart/MonthlyAverageWheatherDataChart";

const HomePageLayout = () => {
  const { latitude, longitude, name } = useCityQueryStore(
    (state) => state.cityAttrebutes
  );
  const { data } = useCurrentWeather({ latitude, longitude });
  return (
    <div className="h-screen w-full flex flex-col gap-7 ">
      <Navbar />

      <div className="grid grid-cols-12 w-full gap-10">
        <CardContainer additionalStyles="flex flex-1 items-center justify-center col-span-5">
          <CurrentWeatherCard
            cityName={name}
            weatherCode={data?.current.weather_code ?? 0}
            tempraure={{
              currentTemp: data?.current.temperature_2m ?? 0,
              feelsLikeTemp: data?.current.apparent_temperature ?? 0,
              highTemp: data?.daily.temperature_2m_max[0] ?? 0,
              lowtemp: data?.daily.temperature_2m_min[0] ?? 0,
            }}
            weatherSituation="cloudy"
          />
        </CardContainer>

        <CardContainer additionalStyles="flex flex-col col-span-7">
          <p className="font-bold text-lg font-sans">
            Average Monthly Temprature
          </p>

          <MonthlyTemperatureChart data={[]} />
        </CardContainer>
      </div>
    </div>
  );
};

export default HomePageLayout;
