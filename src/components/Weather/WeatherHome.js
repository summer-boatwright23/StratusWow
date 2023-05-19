import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WeatherHome({locations}) {
  
//   const [weather, setWeather] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const {id} = useParams();
//   const location = locations.find(loc => loc.name===id)
//   const fetchCity = async () => {
//     try {
//       const urlLA =
//       `https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&hourly=apparent_temperature,precipitation_probability,precipitation&models=best_match&daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
//       const responseLA = await fetch(urlLA);
//       const laWeatherData = await responseLA.json();
//       // console.log(laWeatherData)
//       setWeather(laWeatherData);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(weather && weather.data)
//   useEffect(() => {
//     fetchCity();
//   }, []);
  return (
    <div>
      {/* {weather ? ( */}
        <div>
          this is the home page
        </div>
      {/* ) : (
        <p>loading...</p>
      )} */}
        <div class='ratio ratio-4x3'>
          <iframe
            src='https://www.youtube.com/embed/videoseries?list=PLthVfbMi02IO8pU5a9b8qeUBZl7PS_Ty9'
            title='YouTube video'
            width="600xp"
            height="370px"
            allowFullScreen
          ></iframe>
        </div>
     
    </div>
  );
}
