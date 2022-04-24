import React, {
  useState,
  useEffect
} from 'react';

import { Route} from "react-router-dom"

import axios from 'axios';

import './App.css';

import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Ciudad from './components/Ciudad.jsx';
import About from './components/About.jsx';

import style from "./styles/Home.module.css"

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [state, setState] = useState({
    cities: [],
    city: {},
    isLoding: true
  })


  function handleSubmit(ciudad){
      axios({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
      })
      .then( ({data}) =>{
          if(!data) alert("city dont"+ciudad+" found");
          setState({
            ...state,
            cities: state.cities.find((city)=>city.id == data.id)? [...state.cities]: [...state.cities, data]
          })
        }
      )
  }

  function onClose(id){
    setState({
      ...state,
      cities: state.cities.filter( (city) => city.id !== id )
    })
  }

  function onCloseAll(id){
    setState({
      ...state,
      cities: []
    })
  }

  function getCityDetail(id){
    setState({
      ...state,
      city: state.cities.filter( (city) => city.id == id )
    })
  }

  return (
    <>
        <Route exact path="/">
              <SearchBar
                onSearch={handleSubmit}
                onCloseAll={onCloseAll}
              />
          </Route>
        <Route exact path="/" >
            <Cards
              onClose={onClose}
              cities={state.cities}
            />
        </Route>
        <Route path="/cities/:id">
          <Ciudad
            cities={state.cities}
          />
        </Route>
        <Route exat path="/about">
          <About/>
        </Route>
    </>
  );
}

export default App;
