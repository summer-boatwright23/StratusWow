import './App.css';
import { Routes, Route } from "react-router-dom";
import WeatherHome from '../../components/Weather/WeatherHome';
import LocationsIndex from '../../pages/LocationsIndex/LocationsIndex';
import DefaultWeather from '../Weather/WeatherDetail';
import Nav from '../Nav';
import WeatherDetail from '../Weather/WeatherDetail';

function App() {
 
  const locs = [
    {name:"Los Angeles, CA", lat: 34.05, long: -118.24, imgURL:"https://i.pinimg.com/564x/34/01/42/34014210b0dc6dfc0f255e110daaf514.jpg"},
    {name:"New York, NY", lat: 40.7128, long: -74.0060, imgURL:"https://i.pinimg.com/564x/83/d0/00/83d0002353119238fc1e42c5d49e976b.jpg"},  
    {name:"Houston, TX", lat: 29.76, long: -95.36, imgURL:"https://i.pinimg.com/564x/26/b6/d6/26b6d6c6c870ddae32a90b77538de579.jpg"},
    {name:"Leavenworth, WA", lat: 47.59, long: -120.66, imgURL:"https://i.pinimg.com/originals/9f/af/a6/9fafa6ef8c1664ad1f96b257f4f8a8a2.jpg"},
    {name:"Las Vegas, NV", lat: 36.22, long: -115.26, imgURL:"https://i.pinimg.com/564x/00/cc/e2/00cce219873a139dba01a41e0604edb3.jpg"},
    {name:"Miami, FL", lat: 25.77, long: -80.20, imgURL:"https://i.pinimg.com/736x/02/63/a5/0263a52fd2aea96086bd0e0fd5bf6844.jpg"},
    {name:"Tallahassee, FL", lat: 30.45, long: -84.2, imgURL:"https://i.pinimg.com/564x/79/ac/95/79ac95c341d2ece61be08dd90443a9dd.jpg"},
    {name:"Atlanta, GA", lat: 33.76, long: -84.42, imgURL:"https://i.pinimg.com/564x/d7/33/11/d733111fc3366c1a1cf3b5a7cc7e5369.jpg"},
    {name:"Louisville, KY", lat: 38.16, long: -85.64, imgURL:"https://i.pinimg.com/564x/ca/bd/ad/cabdadea98f16ac1cb7653f402aeb710.jpg"},
    {name:"Portland, OR", lat: 45.53, long: -122.65, imgURL:"https://i.pinimg.com/564x/92/2d/c0/922dc003a5b38aea264aeb1886f8bc21.jpg"},
    {name:"Albuquerque, NM", lat: 35.10, long: -106.64, imgURL:"https://i.pinimg.com/564x/e1/cc/5a/e1cc5a65300dc06830141798e89929fa.jpg"},
    {name:"Paris, France", lat: 48.85, long: 2.35, imgURL:"https://i.pinimg.com/564x/8c/3b/11/8c3b11b0c7c73765c955e58949dc8119.jpg"}
  

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
