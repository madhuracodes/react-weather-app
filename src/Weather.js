import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <ul>
        <li>Friday 10:30</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />{" "}
          <span className="temperature">7</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13km/hr </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
