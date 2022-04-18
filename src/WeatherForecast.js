import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>{" "}
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
          />
          <div className="ForecastTemperatures">
            <span className="ForecastTemperatureMax">19</span>
            <span className="ForecastTemperatureMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
