import DefaultWeather from "../../components/Weather/WeatherDetail"
import { Link } from "react-router-dom";


const LocationsList = ({locations}) => {
    return (
      <div>
        {locations.map((loc, idx) => <Link key={idx} to={`/Locations/${loc.name}`}>
                    <h2>{loc.name}</h2>
                    </Link>)}
      </div>
    )
  };
  
  export default LocationsList;
  

