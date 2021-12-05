import React from "react";
import "./weather.style.css";

const Weather = props => {
  const celsius = props.location.state.celsius;
  const farent = props.location.state.farent;

  return (
    <div className="container12">
      <div className="center12">

        {celsius ? (
          <div>
            <h3 className="label">Celsius </h3>
            <h1 className="value">{celsius}&deg;</h1>
          </div>
        ) : null}

        {farent ? (
          <div className="next">
            <h1 className="label">Fahrenheit</h1>
            <h1 className="value">{farent}&deg;</h1>
          </div>
        ) : null}

      </div>
    </div>
  );
};

export default Weather;
