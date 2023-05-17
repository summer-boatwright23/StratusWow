import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LocationsList() {
  
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCity = async () => {
    try {
      const urlLA =
    "https://api.open-meteo.com/v1/forecast?latitude=32.72&longitude=-117.16&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto";  
      const responseLA = await fetch(urlLA);
      const laWeatherData = await responseLA.json();
      setWeather(responseLA.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <h1>LA</h1>
          <p>{weather.current_weather}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
