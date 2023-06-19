import React from "react";
import InfoText from "./InfoText";

function WeatherDetails(props: any) {
  return (
    <div className="flex flex-row justify-around gap-x-10 gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl w-full">
      <InfoText
        title={`${props.weather?.current?.temp_c}°C`}
        subtitle="Feels like"
      />

      <InfoText
        title={`${props.weather?.current?.wind_kph} km/h`}
        subtitle="Winds"
      />
      <InfoText title={props.weather?.current?.uv} subtitle="UV Index" />
      {/* <InfoText title="lorem" subtitle="ipsum" /> */}
    </div>
  );
}

export default WeatherDetails;
