import React from 'react';
import PropTypes from 'prop-types';

const CityWeather = ({cityName, cityCode}) => {
  console.log("éé");
  const temperature = 25;
  return(
    <div className="weather-city">
      <h3>{cityName}</h3>
      <p>{cityCode}</p>
      <h3>{temperature}</h3>
    </div>
)};

CityWeather.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityCode: PropTypes.number.isRequired,
};

export default CityWeather;
