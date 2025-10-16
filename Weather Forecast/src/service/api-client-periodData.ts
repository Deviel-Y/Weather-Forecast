import axios from "axios";

const axiosInstance = axios.create({
 baseURL: "https://historical-forecast-api.open-meteo.com/v1",
 params: {
  daily: "temperature_2m_mean",
  timezone: "auto",
  start_date: `${new Date().getFullYear()}-01-01`,
  end_date: `${new Date().getFullYear()}-${
   new Date().getMonth() + 1
  }-${new Date().getDate()}`,
 },
});

class APIClientMonthlyData<T> {
 private latitude: number;
 private longitude: number;

 constructor(latitude: number, longitude: number) {
  this.latitude = latitude;
  this.longitude = longitude;
 }

 getMonthlyData = async () => {
  const response = await axiosInstance.get<T>("/forecast", {
   params: {
    latitude: this.latitude,
    longitude: this.longitude,
   },
  });

  return response.data;
 };
}

export default APIClientMonthlyData;
