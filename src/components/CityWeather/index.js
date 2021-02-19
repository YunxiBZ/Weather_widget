import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

const CityWeather = ({cityName, cityCode}) => {
  // Hooks `useState` serve create state and a exclusive function for update state
  const [temperature, setTemperature] = useState(25);
  

  const fetchTemperature = ()=>{
    // URL of local API for develop environement
    const local_URL = `http://localhost:1234/data/2.5/weather?q=${cityCode}`;
    
    axios.get(local_URL)
    .then(
      (res) => {setTemperature(res.data.main.temp)}
    )
    .catch(
      (e) => {console.error(e)}
    )
  }

  // Hooks useEffect execute function fetcheTemperature when the component finish download
  useEffect(fetchTemperature,[]);

  return(
    <div className="weather">
      <h3 className="weather__city">{cityName}</h3>
      <p className="weather__code">{cityCode}</p>
      <h3 className="weather__temp">{Math.round(temperature)}</h3>
    </div>
)};

CityWeather.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityCode: PropTypes.number.isRequired,
};

export default CityWeather;
