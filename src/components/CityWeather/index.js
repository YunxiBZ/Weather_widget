import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CityWeather = ({cityName, cityCode}) => {
  // Hooks useState 
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

  // Hooks useEffect
  useEffect(fetchTemperature,[]);

  return(
    <div className="weather-city">
      <h3>{cityName}</h3>
      <p>{cityCode}</p>
      <h3>{Math.round(temperature)}</h3>
    </div>
)};

CityWeather.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityCode: PropTypes.number.isRequired,
};

export default CityWeather;
