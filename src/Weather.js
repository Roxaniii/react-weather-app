import React from "react";

export default function Weather() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Enter a city name"
          className="form-control"
        />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <h1>Berlin</h1>
      <ul>
        <li>Monday, 11:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
