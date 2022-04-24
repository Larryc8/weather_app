import React from 'react';
import { Link } from "react-router-dom";

import style from "../styles/Home.module.css"

export default function Card(props) {
  // acá va tu código
  return (
  <div className={style.card} >
        <div className={style.header}>
          <Link style={{textDecoration: "none"}}
            to={"/cities/" + props.id}
            children={
              <h2>{props.name}</h2>
              }
          />
        </div>
        <div className={style.button}>
          <input
            type="button"
            value="x"
            onClick={() => props.onClose(props.id)}
            style={{
              fontWeight: "bold",
              color: "red",
              width:"22px",
              height:"22px",
              border: "0",
              backgroundColor: "#FF482B"
            }}
          />
        </div>
        <div className={style.min}>
          <p> <b>min</b></p>
          <span>{props.min}</span>
        </div>

        <div className={style.max}>
          <p><b>max</b></p>
          <span>{props.min}</span>
        </div>

        <div className={style.img}>
            <img alt="climate Card" src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
        </div>
  </div>
 )
};
