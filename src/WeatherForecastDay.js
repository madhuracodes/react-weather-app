import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forDay.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={props.forDay.condition.icon_url} className="weather-icon" />{" "}
      </div>{" "}
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.forDay.temperature.maximum)}º
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {Math.round(props.forDay.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
