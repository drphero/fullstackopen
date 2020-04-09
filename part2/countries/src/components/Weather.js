import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [api_key, city]);

  if (weather) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        <div>
          <strong>temperature:</strong> {weather.current.temperature} Celsius
        </div>
        <div>
          <img src={weather.current.weather_icons[0]} alt='weather' />
        </div>
        <div>
          <strong>wind:</strong> {weather.current.wind_speed} kph direction{' '}
          {weather.current.wind_dir}
        </div>
      </div>
    );
  } else return <div></div>;
};

export default Weather;
