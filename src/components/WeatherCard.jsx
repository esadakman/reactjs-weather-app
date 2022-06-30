import React from "react";

// const WeatherCard = (props) => {
// const { main, name, sys, weather, iconUrl } = props;
const WeatherCard = ({ main, name, sys, weather, iconUrl }) => {
  return (
    <div>
      <li className="city">
        <h2 className="city-name">
          <span>{name}</span>
          <sup>{sys.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(main.temp)}
          <sup>°C</sup>
        </div>
        <figure>
          <img className="city-icon" src={iconUrl} alt="city-icon" />
          <figcaption>{weather[0].description}</figcaption>
        </figure>
      </li>
    </div>
  );
};

export default WeatherCard;
