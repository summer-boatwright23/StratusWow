import './App.css';
import { Routes, Route } from "react-router-dom";
import WeatherShow from '../../pages/WeatherShow/WeatherShow';
import LocationsList from '../../pages/LocationsList/LocationsList';
import LocationsForm from '../../pages/LocationsForm/LocationsForm';
import Nav from '../Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">
      <Routes>
        <Route path="/" element={<WeatherShow />} />
        <Route path="/Locations" element={<LocationsList />} />
        <Route path="/Locations/:id" element={<LocationsForm />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
