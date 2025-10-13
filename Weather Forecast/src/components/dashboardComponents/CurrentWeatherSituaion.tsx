import type { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  weatherSituation: string;
  feelsLike: string;
}

const CurrentWeatherSituaion = ({
  Icon,
  feelsLike,
  weatherSituation,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 text-[#003464]">
      <div className="justify-self-center">
        <Icon />
      </div>

      <div>
        <p className="text-[32px]">{weatherSituation}</p>
        <p>Feels Like {feelsLike}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherSituaion;
