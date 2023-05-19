import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WeatherDetail({locations}) {
  
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const location = locations.find(loc => loc.name===id)
  console.log(location)
  const fetchCity = async () => {
    try {
      const urlLA =
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&hourly=apparent_temperature,precipitation_probability,precipitation&models=best_match&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
      const responseLA = await fetch(urlLA);
      const laWeatherData = await responseLA.json();
      // console.log(laWeatherData)
      setWeather(laWeatherData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weather && weather.data)
  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <div>
      {weather ? (
        <div>
          <h1>{location.name}</h1>
          {/* <h1>Los Angeles</h1> */}
          <p>Temp: {weather && weather.current_weather?.temperature}°F</p>
          <p>High:{weather && weather.daily?.apparent_temperature_max[0]}°F</p>
          <p>Low: {weather && weather.daily?.apparent_temperature_min[0]}°F</p>
          <p>Chance of Precipitation: {weather && weather.hourly?.precipitation_probability[0]}%</p>
          <img src = {location.imgURL} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
