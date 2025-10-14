import axios from "axios";

const axiosInstance = axios.create({
 baseURL: "https://historical-forecast-api.open-meteo.com/v1",
 params: {
  daily: "temperature_2m_mean",
  timezone: "auto",
 },
});

class APIClientMonthlyData<T> {
 private latitude: number;
 private longitude: number;
 private start_date: string;
 private end_date: string;

 constructor(
  latitude: number,
  longitude: number,
  start_date: string,
  end_date: string
 ) {
  this.latitude = latitude;
  this.longitude = longitude;
  this.start_date = start_date;
  this.end_date = end_date;
 }

 getMonthlyData = async () => {
  const response = await axiosInstance.get<T>("/forecast", {
   params: {
    latitude: this.latitude,
    longitude: this.longitude,
    start_date: this.start_date,
    end_date: this.end_date,
   },
  });

  return response.data;
 };
}

export default APIClientMonthlyData;
