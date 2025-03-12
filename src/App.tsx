import { useState, useEffect } from "react";
import SelectCity from "./components/SelectCity";
import WeatherDetails from "./components/WeatherDetails";
import TemperatureSwitch from "./components/TemperatureSwitch";
import { Cities, CityType } from "./types/city";
import { Weather } from "./types/weather";
import { Unit, UnitType } from "./types/temperature";
import "./App.css";

const API_KEY = "";

const WeatherApp = () => {
  const [city, setCity] = useState<CityType>(Cities[0]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [unit, setUnit] = useState<UnitType>(Unit.metric);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
  
        if (!response.ok) {
          throw new Error();
        }
  
        const data: Weather = await response.json();
  
        setWeather(data);
      } catch (error) {
        setError("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, unit]);

  return (
    <div className="weather-app">
      <h1 className="title">Weather app</h1>
      <SelectCity city={city} setCity={setCity} />
      <TemperatureSwitch unit={unit} setUnit={setUnit} />
      {loading ? (
        <div className="spinner"></div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        weather && <WeatherDetails weather={weather} unit={unit} />
      )}    
    </div>
  );
};

export default WeatherApp;
