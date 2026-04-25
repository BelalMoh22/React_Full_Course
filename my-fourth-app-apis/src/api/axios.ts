import axios from "axios";

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export type CurrentWeather = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
};

type ForecastResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
};

export const getCurrentWeather = async (signal?: AbortSignal) => {
  const response = await weatherApi.get<ForecastResponse>("/forecast", {
    params: {
      latitude: 30.0444,
      longitude: 31.2357,
      current_weather: true,
    },
    signal,
  });
  // console.log(response);
  // console.log(response.data);
  return response.data;
};

export default weatherApi;
