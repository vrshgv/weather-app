import { UnitType } from "../types/temperature";

export interface Weather {
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}

export interface WeatherDetailsProps {
  weather: Weather;
  unit: UnitType;
}
