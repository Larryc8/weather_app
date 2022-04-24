
import {useParams} from "react-router-dom";

import ciudadStyle from "../styles/MoreInfoCard.module.css";
import style from "../styles/Home.module.css"

export default function About() {


  return (
      <div className={ciudadStyle.bigContainer}>
        <div className={ciudadStyle.container}>
            <div className={ciudadStyle.header}>
                <h1>About</h1>
            </div>
            <div className={ciudadStyle.info}>
                <p>
                  This is a web application where you can get specific information about the weather of more than  200.000
                  cities in the world
                </p>
                <p>
                  This web application was made with React js and
                  <a href="https://openweathermap.org/api" target="_blank">
                     <span> open weather api</span>
                  </a>
                </p>
            </div>
        </div>
      </div>
 )
};
