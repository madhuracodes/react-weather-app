import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thus </div>
            <div className="WeatherForecast-icon">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="weather-icon"
              />{" "}
            </div>{" "}
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}º
              </span>
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[0].temperature.minimum)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (props.data.coordinates) {
      const apiKey = "40912tb49034f3e73f11616ed1a9396o";
      let latitude = props.data.coordinates.latitude;
      let longitude = props.data.coordinates.longitude;
      console.log("LATITUDE:", latitude);
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    return null;
  }
}
