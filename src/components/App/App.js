import './App.css';
import { Routes, Route } from "react-router-dom";
import WeatherHome from '../../components/Weather/WeatherHome';
import LocationsIndex from '../../pages/LocationsIndex/LocationsIndex';
import DefaultWeather from '../Weather/WeatherDetail';
import Nav from '../Nav';
import WeatherDetail from '../Weather/WeatherDetail';

function App() {
  const locs = [
    {name:"Los Angeles", lat: 34.05, long: -118.24},
    {name:"New York", lat: 0, long: 0},
    {name:"Houston", lat: 0, long: 0},
    {name:"Seattle", lat: 0, long: 0},

  

  ]
  return (
    <div className="App">
      <Nav />
      <main className="container">
      <Routes>
        <Route path="/" element={<WeatherHome locations={locs}/>} />
        <Route path="/Locations" element={<LocationsIndex locations={locs}/>} />
        <Route path="/Locations/:id" element={<WeatherDetail locations={locs}/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
