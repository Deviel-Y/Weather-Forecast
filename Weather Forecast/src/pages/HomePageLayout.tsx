import Navbar from "../components/navbarComponents/Navbar";
import CurrentWeatherCard from "../components/dashboardComponents/CurrentWeatherCard";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const HomePageLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-7 ">
      <Navbar />

      <CurrentWeatherCard
        cityName="San Francisco"
        Icon={HiAdjustmentsHorizontal}
        tempraure={{
          currentTemp: "2", //DummyData For Now!!
          feelsLikeTemp: "2",
          highTemp: "2",
          lowtemp: "2",
        }}
        weatherSituation="cloudy"
      />
    </div>
  );
};

export default HomePageLayout;
