import CardContainer from "../../CardContainer";
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
  <CardContainer additionalStyles="flex flex-1 items-center justify-center col-span-5 px-6 pt-5 pb-[17px] max-md:p-5 shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
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
  </CardContainer>
 );
};

export default CurrentWeatherCard;
