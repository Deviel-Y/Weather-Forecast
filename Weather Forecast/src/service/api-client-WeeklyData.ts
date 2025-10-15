import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https:api.open-meteo.com/v1",
  params: {
    daily: "weather_code",
    timezone: "auto",
    hourly: "temperature_2m",
    models: "gfs_seamless",
    forecast_days: 14,
  },
});

class APIClientWeeklyData<T> {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getWeeklyData = async () => {
    const response = await axiosInstance.get<T>("/forecast", {
      params: {
        latitude: this.latitude,
        longitude: this.longitude,
      },
    });

    return response.data;
  };
}

export default APIClientWeeklyData;
