import CurrentDate from "./CurrentDate";
import CurrentTempratureStatus from "./CurrentTempratureStatus";
import CurrentWeatherSituaion from "./CurrentWeatherSituaion";
import LocationChip from "./LocationChip";

interface Props {
 cityName: string;
 weatherSituation: string;
 weatherFigure: string;
 tempraure: {
  currentTemp: number;
  highTemp: number;
  lowtemp: number;
  feelsLikeTemp: number;
 };
}

const CurrentWeatherCard = ({
 weatherFigure,
 cityName,
 tempraure,
 weatherSituation,
}: Props) => {
 return (
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

   <div className="w-fit pe-9">
    <CurrentWeatherSituaion
     weatherFigure={weatherFigure}
     feelsLike={tempraure.feelsLikeTemp}
     weatherSituation={weatherSituation}
    />
   </div>
  </div>
 );
};

export default CurrentWeatherCard;
