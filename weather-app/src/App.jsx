import { useEffect, useState } from "react";

import "./App.css";

import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Search from "./components/search/Search";
import { weather_API_KEY, weather_URL } from "./api/api";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // .split - it splits the string with "(space character) " and stores it in two valuabels
    const [lat, lon] = searchData.value.split(" ");

    const loadWeatherAndForecast = async () => {
      try {
        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(
            `${weather_URL}/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`
          ),
          fetch(
            `${weather_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`
          ),
        ]);

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        setCurrentWeather({ city: searchData.label, ...weatherData });
        setCurrentForecast({ city: searchData.label, ...forecastData });

        // Process the weatherData and forecastData as needed
      } catch (error) {
        console.error(error);
      }
    };

    loadWeatherAndForecast();
  };

  console.log(currentWeather);
  console.log(currentForecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
  );
}

export default App;
