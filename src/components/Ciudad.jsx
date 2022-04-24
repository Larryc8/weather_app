
import {useParams} from "react-router-dom";

import ciudadStyle from "../styles/MoreInfoCard.module.css";
import style from "../styles/Home.module.css"

export default function Ciudad({cities}) {
  const {id} = useParams();
  const [city] = cities.filter( (city) => city.id == id);

  return (
      <div className={ciudadStyle.bigContainer}>
        <div className={ciudadStyle.container}>
            <div className={ciudadStyle.header}>
                <h1>{city.name}</h1>
            </div>
            <div className={ciudadStyle.info}>
              <div>Temperture: {city.main.temp} ºC</div>
              <div>Climate: {city.weather[0].description} </div>
              <div>Viento: {city.wind.speed} km/h </div>
              <div>Cantidad de nubes: {city.clouds.all} </div>
              <div>latitude: {city.coord.lon}</div>
              <div>Longitude: {city.coord.lat}</div>
            </div>
        </div>
      </div>
 )
};
