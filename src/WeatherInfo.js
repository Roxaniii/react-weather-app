import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-2 mb-5">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
