import React, {
  useState
} from 'react';

import {Link} from "react-router-dom";

import style from "../styles/Home.module.css"
import srcImg from "../images/logoHenry.png"

export default function SearchBar(props) {
  const [cityname, setCityname] = useState("");

  function handleChange(event){
    setCityname(event.target.value)
  }

    return (
      <nav className={style.navbar}>
            <div className={style.genericBox}>
              <Link to="/"><img src={srcImg} alt="Weathe App Logo"/></Link>

              <Link
              to="/about">
                <h3>About</h3>
              </Link>
            </div>

          <div style={{order: 1}}>
            <input
              name="Search_country"
              type="text"
              placeholder=" Ciudad..."
              autoComplete="off"
              id="textbox"
              value={cityname}
              onChange={handleChange}
              style={{
                width:"140px",
                height:"28px",
                margin: "3px",
                backgroundColor: "#EAEDED",
                border: "1px solid #ABB2B9"
              }}
            />
            <input
              name="add_new_country"
              onClick={() =>{
                setCityname("");
                props.onSearch(cityname)
              }}
              type={"submit"}
              value={"Agregar"}
              style={{
                width:"70px",
                height:"33px",
                color: "white",
                padding: "4px",
                backgroundColor: "#008080",
                borderRadius: "4px",
                border: "0px",
                marginLeft: "2px"
              }}
            />
            <input
             name="delete_all_country"
              type="button"
              value="Delete All"
              onClick={()=>props.onCloseAll()}
              style={{
                width:"75px",
                height:"33px",
                backgroundColor: "red",
                color: "white",
                border: "0px",
                borderRadius: "2px",
                marginLeft: "2px"
              }}
            />
          </div>

          <div>
          </div>
      </nav>
    );
};

//
