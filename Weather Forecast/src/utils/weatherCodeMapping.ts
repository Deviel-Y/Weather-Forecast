import clearWeatherFigure from "../assets/Clear.png";
import rainCloudFigure from "../assets/Rain_cloud.png";
import snowFigure from "../assets/Snow.png";
import fogFigure from "../assets/fog.png";
import partlyCloudFigure from "../assets/partly_cloud.png";

export type WeatherCodeType = //These numbers are from https://open-meteo.com/en/docs

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

export const weatherCodeMapping: Record<
 WeatherCodeType,
 { figure: string; label: string }
> = {
 //Map each weather code to a related figure
 0: { figure: clearWeatherFigure, label: "Sunny" },
 1: { figure: clearWeatherFigure, label: "Sunny" },
 2: { figure: partlyCloudFigure, label: "Cloudy" },
 3: { figure: partlyCloudFigure, label: "Cloudy" },
 45: { figure: fogFigure, label: "Fog" },
 48: { figure: fogFigure, label: "Fog" },
 51: { figure: rainCloudFigure, label: "Rainy" },
 53: { figure: rainCloudFigure, label: "Rainy" },
 55: { figure: rainCloudFigure, label: "Rainy" },
 61: { figure: rainCloudFigure, label: "Rainy" },
 63: { figure: rainCloudFigure, label: "Rainy" },
 66: { figure: rainCloudFigure, label: "Rainy" },
 67: { figure: rainCloudFigure, label: "Rainy" },
 80: { figure: rainCloudFigure, label: "Rainy" },
 81: { figure: rainCloudFigure, label: "Rainy" },
 82: { figure: rainCloudFigure, label: "Rainy" },
 71: { figure: snowFigure, label: "snow" },
 73: { figure: snowFigure, label: "snow" },
 75: { figure: snowFigure, label: "snow" },
};
