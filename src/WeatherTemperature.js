import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      {" "}
      <span>
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">ºC</span>
      </span>
    </div>
  );
}
