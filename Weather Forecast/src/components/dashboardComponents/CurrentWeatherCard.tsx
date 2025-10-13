import type { IconType } from "react-icons/lib";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import useCityQueryStore from "../../store";
import CurrentDate from "./CurrentDate";
import CurrentTempratureStatus from "./CurrentTempratureStatus";
import CurrentWeatherSituaion from "./CurrentWeatherSituaion";
import LocationChip from "./LocationChip";

interface Props {
 cityName: string;
 weatherSituation: string;
 Icon: IconType;
 tempraure: {
  currentTemp: string;
  highTemp: string;
  lowtemp: string;
  feelsLikeTemp: string;
 };
}

const CurrentWeatherCard = ({
 Icon,
 cityName,
 tempraure,
 weatherSituation,
}: Props) => {
 const { latitude, longitude } = useCityQueryStore(
  (state) => state.cityAttrebutes
 );

 const {} = useCurrentWeather({ latitude, longitude });

 return (
  <div className="flex items-center justify-center px-6 pt-5 pb-[17px] bg-[#E1E9EE] rounded-3xl shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
   <div className="flex flex-row justify-between w-full h-full ">
    <div className="flex flex-col gap-2">
     <LocationChip cityName={cityName} />
     <CurrentDate />
     <CurrentTempratureStatus
      currentTemp={tempraure.currentTemp}
      highTemp={tempraure.highTemp}
      lowTemp={tempraure.lowtemp}
     />
    </div>

    <CurrentWeatherSituaion
     Icon={Icon}
     feelsLike={tempraure.feelsLikeTemp}
     weatherSituation={weatherSituation}
    />
   </div>
  </div>
 );
};

export default CurrentWeatherCard;
