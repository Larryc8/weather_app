import React from 'react';
import Card from './Card.jsx';

import style from "../styles/Home.module.css"

export default function Cards(props) {

  return (
  <div className={style.cardbox}>
    {
    props.cities.map(
      (city) => (< Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        key={city.id}
        id={city.id}
        onClose={props.onClose}
      />)
    )
    }
  </div>);
};
