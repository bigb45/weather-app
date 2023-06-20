import React from "react";
import InfoText from "./MainSubtext";

function CurrentWeather(props: any) {
  return (
    <div className="flex flex-row justify-around gap-x-10 gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl w-full hover:backdrop-blur-lg transition duration-75">
      <div className="flex flex-col justify-around gap-y-10">
        <InfoText
          title={`${Math.round(props.weather?.current?.feelslike_c)}°C`}
          subtitle="Feels like"
        />
        <InfoText
          title={`${props.weather?.current?.wind_kph} km/h`}
          subtitle="Winds"
        />
      </div>
      <div className="flex flex-col justify-around gap-y-10">
        <InfoText title={props.weather?.current?.uv} subtitle="UV Index" />
        <InfoText title={props.weather?.current?.uv} subtitle="lorem" />
      </div>
    </div>
  );
}

export default CurrentWeather;
