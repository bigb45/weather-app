import React, { useState } from "react";

function Weather(props: any) {
  return (
    <div className="flex flex-col gap-y-10 p-10 rounded-xl m- backdrop-blur-md shadow-lg drop-shadow-xl hover:backdrop-blur-lg transition duration-75">
      <h1 className="text-6xl text-white drop-shadow-2xl shadow-black">
        {`${Math.round(props.weather?.current?.temp_c)}°C, `}
        {props.weather?.current?.condition?.text}
      </h1>

      <h2 className="text-3xl text-white drop-shadow-2xl shadow-black">
        {props.weather?.location?.region}, {props.weather?.location?.country}
      </h2>
    </div>
  );
}

export default Weather;
