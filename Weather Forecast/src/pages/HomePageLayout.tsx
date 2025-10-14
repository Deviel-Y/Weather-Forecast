import Navbar from "../components/navbarComponents/Navbar";
import CurrentWeatherCard from "../components/dashboardComponents/currentWeather/CurrentWeatherCard";
import useCurrentWeather from "../hooks/useCurrentWeather";
import useCityQueryStore from "../store";

const HomePageLayout = () => {
  const { latitude, longitude, name } = useCityQueryStore(
    (state) => state.cityAttrebutes
  );
  const { data } = useCurrentWeather({ latitude, longitude });
  return (
    <div className="h-screen w-full flex flex-col gap-7 ">
      <Navbar />

      <CurrentWeatherCard
        cityName={name}
        weatherCode={data?.current.weather_code ?? 1}
        tempraure={{
          currentTemp: data?.current.temperature_2m ?? 0,
          feelsLikeTemp: data?.current.apparent_temperature ?? 0,
          highTemp: data?.daily.temperature_2m_max[0] ?? 0,
          lowtemp: data?.daily.temperature_2m_min[0] ?? 0,
        }}
        weatherSituation="cloudy"
      />
    </div>
  );
};

export default HomePageLayout;
