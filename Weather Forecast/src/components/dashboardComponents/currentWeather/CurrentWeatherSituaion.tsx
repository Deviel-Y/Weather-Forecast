import clearWeatherFigure from "../../../assets/Clear.png";
import rainCloudFigure from "../../../assets/Rain_cloud.png";
import snowFigure from "../../../assets/Snow.png";
import fogFigure from "../../../assets/fog.png";
import partlyCloudFigure from "../../../assets/partly_cloud.png";

interface Props {
  weatherCode: number;
  weatherSituation: string;
  feelsLike: number;
}

const CurrentWeatherSituaion = ({
  weatherCode,
  feelsLike,
  weatherSituation,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 text-[#003464]">
      <div className="justify-self-center w-[155px] h-[115px]">
        <img
          className="object-contain w-full h-full"
          src={weatherCodeMapping[weatherCode as WeatherCodeType].figure}
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

type WeatherCodeType = //These numbers are from https://open-meteo.com/en/docs

    | 0
    | 1
    | 2
    | 3
    | 45
    | 48
    | 51
    | 53
    | 55
    | 61
    | 63
    | 66
    | 67
    | 80
    | 81
    | 82
    | 71
    | 73
    | 75;

const weatherCodeMapping: Record<WeatherCodeType, { figure: string }> = {
  //Map each weather code to a related figure
  0: { figure: clearWeatherFigure },
  1: { figure: clearWeatherFigure },
  2: { figure: partlyCloudFigure },
  3: { figure: partlyCloudFigure },
  45: { figure: fogFigure },
  48: { figure: fogFigure },
  51: { figure: rainCloudFigure },
  53: { figure: rainCloudFigure },
  55: { figure: rainCloudFigure },
  61: { figure: rainCloudFigure },
  63: { figure: rainCloudFigure },
  66: { figure: rainCloudFigure },
  67: { figure: rainCloudFigure },
  80: { figure: rainCloudFigure },
  81: { figure: rainCloudFigure },
  82: { figure: rainCloudFigure },
  71: { figure: snowFigure },
  73: { figure: snowFigure },
  75: { figure: snowFigure },
};
