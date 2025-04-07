import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thus <img src={props.data.iconUrl} alt={props.data.description} /> 19
          10
        </div>
      </div>
    </div>
  );
}
