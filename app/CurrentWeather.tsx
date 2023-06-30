import React, { useContext } from "react";
import MainSubtext from "./MainSubtext";
import WeatherContext from "./context/weatherContext";

function CurrentWeather() {
  const { weatherDetails } = useContext(WeatherContext);
  return (
    <div className="flex flex-row justify-around gap-x-10 gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl w-full transition duration-75">
      <div className="flex flex-col justify-around gap-y-10" onClick={() => {}}>
        {weatherDetails ? (
          <MainSubtext
            title={Math.round(weatherDetails.temp)}
            modifier={"°C"}
            subtitle="Feels like"
          />
        ) : (
          <MainSubtext />
        )}
        <MainSubtext
          title={weatherDetails ? weatherDetails.wind_speed : false}
          modifier={"km/h"}
          subtitle="Winds"
        />
      </div>
      <div className="flex flex-col justify-around gap-y-10">
        <MainSubtext
          title={weatherDetails.uv}
          subtitle="UV Index"
          modifier=""
        />
        <MainSubtext
          title={weatherDetails.uv}
          subtitle="UV Index"
          modifier=""
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
