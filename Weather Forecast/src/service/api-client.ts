import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
  params: {
    daily: "temperature_2m_max,temperature_2m_min",
    models: "icon_seamless",
    current: "apparent_temperature,temperature_2m,weather_code",
    timezone: "auto",
    forecast_days: 1,
  },
});

class APIClient<T> {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  get = async () => {
    const response = await axiosInstance.get<T>("/forecast", {
      params: { latitude: this.latitude, longitude: this.longitude },
    });

    return response.data;
  };
}

export default APIClient;
