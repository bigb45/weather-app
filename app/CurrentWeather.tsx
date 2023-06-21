import React from "react";
import MainSubtext from "./MainSubtext";

function CurrentWeather(props: any) {
  return (
    <div className="flex flex-row justify-around gap-x-10 gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl w-full hover:backdrop-blur-lg transition duration-75">
      <div className="flex flex-col justify-around gap-y-10">
        {props.weather ? (
          <MainSubtext
            title={Math.round(props.weather?.current?.feelslike_c)}
            modifier={"°C"}
            subtitle="Feels like"
          />
        ) : (
          <MainSubtext />
        )}
        <MainSubtext
          title={props.weather ? props.weather?.current?.wind_kph : false}
          modifier={"km/h"}
          subtitle="Winds"
        />
      </div>
      <div className="flex flex-col justify-around gap-y-10">
        <MainSubtext
          title={props.weather?.current?.uv}
          subtitle="UV Index"
          modifier=""
        />
        <MainSubtext
          title={props.weather?.current?.uv}
          subtitle="UV Index"
          modifier=""
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
