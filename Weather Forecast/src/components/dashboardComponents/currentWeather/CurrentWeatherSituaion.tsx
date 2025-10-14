interface Props {
 weatherFigure: string;
 weatherSituation: string;
 feelsLike: number;
}

const CurrentWeatherSituaion = ({
 weatherFigure,
 feelsLike,
 weatherSituation,
}: Props) => {
 return (
  <div className="flex flex-col gap-2 text-[#003464]">
   <div className="justify-self-center w-[155px] h-[115px]">
    <img
     className="object-contain w-full h-full"
     src={weatherFigure}
     alt="Weather Figure"
    />
   </div>

   <div>
    <p className="text-[32px]">{weatherSituation}</p>
    <p>Feels Like {feelsLike}</p>
   </div>
  </div>
 );
};

export default CurrentWeatherSituaion;
