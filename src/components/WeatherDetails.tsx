import { WeatherDetailsProps } from "../types/weather";
import { Unit } from "../types/temperature";
import { formatTime } from "../utils/date";

const WeatherDetails = ({ weather, unit }: WeatherDetailsProps) => (
  <div className="weather-details">
    <h2>{Math.round(weather.main.temp)}° {unit === Unit.metric ? "C" : "F"}</h2>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
    <p>Sunrise: {formatTime(weather.sys.sunrise, weather.timezone)}</p>
    <p>Sunset: {formatTime(weather.sys.sunset, weather.timezone)}</p>
  </div>
);

export default WeatherDetails;
