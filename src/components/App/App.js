import './App.css';
import { Routes, Route } from "react-router-dom";
import WeatherHome from '../../components/Weather/WeatherHome';
import LocationsIndex from '../../pages/LocationsIndex/LocationsIndex';
import DefaultWeather from '../Weather/WeatherDetail';
import Nav from '../Nav';
import WeatherDetail from '../Weather/WeatherDetail';

function App() {
  const locs = [
    {name:"Los Angeles, CA", lat: 34.05, long: -118.24, imgURL:""},
    {name:"New York, NY", lat: 40.7128, long: -74.0060},
    {name:"Houston, TX", lat: 29.76, long: -95.36},
    {name:"Leavenworth, WA", lat: 47.59, long: -120.66},
    {name:"Las Vegas, NV", lat: 36.22, long: -115.26},
    {name:"Miami, FL", lat: 25.77, long: -80.20},
    {name:"Tallahassee, FL", lat: 30.45, long: -84.2},
    {name:"Atlanta, GA", lat: 33.76, long: -84.42},
    {name:"Louisville, KY", lat: 38.16, long: -85.64},
    {name:"Portland, OR", lat: 45.53, long: -122.65},
    {name:"Albuquerque, NM", lat: 35.10, long: -106.64},
    {name:"Paris, France", lat: 48.85, long: 2.35}
  

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
