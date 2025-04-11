import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

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
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <div>
                    {" "}
                    <WeatherForecastDay forDay={dailyForecast} />
                  </div>
                </div>
              );
            }
          })}
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
